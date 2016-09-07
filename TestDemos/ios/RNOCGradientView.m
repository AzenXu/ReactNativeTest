//
//  RNOCGradientView.m
//  TestDemos
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RNOCGradientView.h"
#import "RCTViewManager.h"

@interface RCT_EXTERN_MODULE(RNGradientViewSwift, RCTViewManager) //  定义组件名称, 把这个组件提供给谁
//  声明两个传入属性
RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);

@end