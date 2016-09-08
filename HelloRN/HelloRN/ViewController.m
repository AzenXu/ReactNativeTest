//
//  ViewController.m
//  HelloRN
//
//  Created by XuAzen on 16/9/7.
//  Copyright © 2016年 ymh. All rights reserved.
//

#import "ViewController.h"
#import "ReactViewController.h"
#import <RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"HelloRN"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    rootView.frame = CGRectMake(0, 0, 250, 250);
    [self.view addSubview:rootView];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
