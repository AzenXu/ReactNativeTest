//
//  ReactViewController.m
//  HelloRN
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 ymh. All rights reserved.
//

#import "ReactViewController.h"
#import <RCTRootView.h>

@interface ReactViewController ()

@end

@implementation ReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"HelloRN"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;

}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
@end
