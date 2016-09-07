//
//  RNGradientView.swift
//  TestDemos
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 Facebook. All rights reserved.
//
//  GradientView的子类，1. 可以输出给OC用 2. 将属性转为RN能认识的类型

import Foundation
import GradientView

@objc (RNGradientView)
class RNGradientView: GradientView {
  
  override func willMoveToSuperview(newSuperview: UIView?) {
    super.willMoveToSuperview(newSuperview)
    print("添加到了父view")
  }
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    self.frame = frame
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setLocations(locations: NSArray) {
    self.locations = locations.map({
      return $0 as! CGFloat
    })
  }
  
  func setColors(colors: NSArray) {
    self.colors = colors.map({return RCTConvert.UIColor($0)})
  }
}