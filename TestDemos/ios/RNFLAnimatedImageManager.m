//
//  RNFLAnimatedImageManager.m
//  TestDemos
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RNFLAnimatedImageManager.h"
#import <Foundation/Foundation.h>
#import "RCTBridge.h"
#import "RNFLAnimatedImage.h"
@implementation RNFLAnimatedImageManager

RCT_EXPORT_MODULE()

@synthesize bridge = _bridge;

-(UIView *)view
{
  return [[RNFLAnimatedImage alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(src, NSString); //  声明属性 - 参数猜测为属性名， 属性类型
RCT_EXPORT_VIEW_PROPERTY(contentMode, NSNumber);

- (NSArray<NSString *> *)customDirectEventTypes
{
  return @[
           @"onFrameChange"
           ];
}

//  导出供RN使用的全局变量
- (NSDictionary<NSString *,id> *)constantsToExport
{
  return @{
           @"ScaleAspectFit": @(UIViewContentModeScaleAspectFit),
           @"ScalAspecFill": @(UIViewContentModeScaleAspectFill),
           @"ScaleToFill": @(UIViewContentModeScaleToFill)
           };
}
@end
