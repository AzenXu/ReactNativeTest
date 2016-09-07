//
//  RNFLAnimatedImage.h
//  TestDemos
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "RCTEventDispatcher.h"
#import "RCTView.h"
#import "FLAnimatedImage-master/FLAnimatedImage/FLAnimatedImage.h"

@class RCTEventDispatcher;
@interface RNFLAnimatedImage: UIView
@property (nonatomic, assign) NSString *src;
@property (nonatomic, assign) NSString *contentMode;
- (instancetype)initWithEventDispatcher: (RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;
@end
