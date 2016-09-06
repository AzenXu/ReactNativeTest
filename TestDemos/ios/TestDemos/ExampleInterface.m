//
//  ExampleInterface.m
//  TestDemos
//
//  Created by XuAzen on 16/9/6.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "ExampleInterface.h"
#import "CallAdressbookViewController.h"

@interface ExampleInterface()
@property(nonatomic, strong)NSDictionary *dic;
@end

@implementation ExampleInterface
- (instancetype)init {
  return self;
}

- (NSString *)contactName {
  if (!_contactName) {
    _contactName = @"";
  }
  return _contactName;
}

@synthesize bridge = _bridge;

/*
 *  这个宏用来指定，JS访问这个模块时的名字。括号中传空表示使用类名
 */
RCT_EXPORT_MODULE();

/**
 *  这个宏用来声明定义了一个可以提供给RN组件调用的方法
 *  msg: RN调用时携带的参数
 */
RCT_EXPORT_METHOD(sendMessage:(NSString *)msg)
{
  NSLog(@"收到的来自RN的消息：%@",msg);
  //  检测是否为JSON数据
  NSData *data = [msg dataUsingEncoding:NSUTF8StringEncoding];
  NSError *error;
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
  if (error) {
    NSLog(@"解析错误：%@", error);
  }
  
  //通过和RN约定的字符串调起相应功能
  NSString *login = [dic objectForKey:@"msgType"];
  if ([login isEqualToString:@"pickContact"]) {
    [self _callAddress];
  }
}


- (void)_callAddress {
  UIViewController *controller = (UIViewController *)[[[UIApplication sharedApplication] keyWindow] rootViewController];
  CallAdressbookViewController *addressbookViewController = [[CallAdressbookViewController alloc] init];
  [controller presentViewController:addressbookViewController animated:YES completion:nil];
  self.contactName = addressbookViewController.contactName;
  self.contactPhoneNumber = addressbookViewController.contactPhoneNumber;
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(calendarEventReminderReceived:) name:@"Num" object:nil];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

/**
 *  响应通知，向RN端发JSON
 */
- (void)calendarEventReminderReceived: (NSNotification *)nofi
{
  self.contactPhoneNumber = nofi.object;
  self.contactName = nofi.userInfo[@"name"];
  
  //  去除电话号码中的特殊符号
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@"-" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@"(" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@")" withString:@""];
  self.contactPhoneNumber = [self.contactPhoneNumber stringByReplacingOccurrencesOfString:@" " withString:@""];
  
  //  组装数组转成JSON发给RN
  NSMutableDictionary *dic = [[NSMutableDictionary alloc] init];
  [dic setObject:@"pickContactResult" forKey:@"msgType"];
  
  if (!self.contactPhoneNumber) {
    self.contactPhoneNumber = @"";
  }
  [dic setObject:self.contactPhoneNumber forKey:@"peerNumber"];
  
  if (!self.contactName) {
    self.contactName = @"";
  }
  [dic setObject:self.contactName forKey:@"displayName"];
  
  //  字典转JSON
  self.dic = [dic copy];
  NSError *error = [[NSError alloc] init];
  NSData *data = [NSJSONSerialization dataWithJSONObject:self.dic options:0 error:&error];
  NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  
  //  向RN发消息
  [self.bridge.eventDispatcher sendAppEventWithName:@"NativeModuleMsg" body:@{@"message":str}];
}

@end
