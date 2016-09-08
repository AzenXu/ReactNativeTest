//
//  RNGradientViewManager.swift
//  TestDemos
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import Foundation

@objc (RNGradientViewSwift)
class RNGradientViewManager: RCTViewManager {
  override func view() -> UIView {
    return RNGradientView()
  }
}