//
//  ExampleInterface.h
//  TestDemos
//
//  Created by XuAzen on 16/9/6.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"   //  RCTBridgeModule协议在这里
#import "RCTBridge.h"         //  向RN发事件的
#import "RCTEventDispatcher.h"  //  也是向RN发事件的

@interface ExampleInterface : NSObject<RCTBridgeModule>

@property(strong, nonatomic)NSString *contactName;  //  用来保存选中联系人的信息
@property(strong, nonatomic)NSString *contactPhoneNumber; //  联系人电话

@end
