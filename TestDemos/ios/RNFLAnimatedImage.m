//
//  RNFLAnimatedImage.m
//  TestDemos
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RNFLAnimatedImage.h"
#import "FLAnimatedImage-master/FLAnimatedImage/FLAnimatedImageView.h"
#import "RCTBridgeModule.h"
#import "RCTEventDispatcher.h"    //  RN事件调度器
#import "UIView+React.h"
#import "RCTLog.h"
#import "RNFLAnimatedImage.h"

@implementation RNFLAnimatedImage: UIView {
  RCTEventDispatcher *_eventDispatcher;
  FLAnimatedImage *_image;  //  被包装的原生代码本体， 对应UIImage
  FLAnimatedImageView *_imageView;  //  被包装的原生视图本体, 对应UIImageView
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if (self = [super init]) {
    _eventDispatcher = eventDispatcher;
    _imageView = [[FLAnimatedImageView alloc] init];  //  创建原生视图
    [_imageView addObserver:self forKeyPath:@"currentFrameIndex" options:0 context:nil];
  }
  return self;
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSString *,id> *)change context:(void *)context
{
  if (object == _imageView) {
    if ([keyPath isEqualToString:@"currentFrameIndex"]) {
      //  这是干啥的
      [_eventDispatcher sendInputEventWithName:@"onFrameChange" body:@{@"currentFrameIndex":[NSNumber numberWithUnsignedInteger:[object currentFrameIndex]],@"frameCount":[NSNumber numberWithUnsignedInteger:[_image frameCount]],@"target":self.reactTag}];
    }
  }
}

/**
 *  声明周期方法们
 */
//  对应RN componentWillUnmount
- (void)removeFromSuperview
{
  [_imageView removeObserver:self forKeyPath:@"currentFrameIndex"];
  _eventDispatcher = nil;
  [super removeFromSuperview];
}


//  对应RN componentWillMount
- (void)layoutSubviews
{
  _imageView.frame = self.bounds;
  [self addSubview:_imageView];
}

/**
 *  setter
 */
- (void)setSrc: (NSString *)src {
  if (![src isEqual:_src]) {
    _src = [src copy];
    [self reloadImage];
  }
}

- (void)setContentMode: (NSNumber *)contentMode
{
  if(![contentMode isEqual:_contentMode]) {
    _contentMode = [contentMode copy];
    [self reloadImage];
  }
}

- (void)reloadImage
{
  _image = [FLAnimatedImage animatedImageWithGIFData:[NSData dataWithContentsOfURL:[NSURL URLWithString:_src]]];
  _imageView.contentMode = [_contentMode integerValue];
  _imageView.animatedImage = _image;
}


@end
