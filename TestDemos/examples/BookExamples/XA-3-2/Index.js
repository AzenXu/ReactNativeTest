/**
 * Created by Azen on 16/9/6.
 */

'use strict';

import React, { Component } from 'react';
import {
    Navigator,
    BackAndroid
} from 'react-native';

var RegisterLeaf = require('./Component/RegisterLeaf');
// var WaitingLeaf = require('./Component/WaitingLeaf');

var NaviModule = React.createClass({
    //  自定义函数,告诉Navigator跳转方式
    _configureScene: function (route) {
        return Navigator.SceneConfigs.FadeAndroid;
    },
    //  自定义函数,告诉Navigator如何挂接当前视图
    _renderScene: function (router, navigator) {
        this._navigator = navigator;
        switch (router.name) {
            case "register":
                return < RegisterLeaf navigator={navigator}/>;
            case "waiting":
                return < WaitingLeaf phoneNumber={router.phoneNumber} userPW={router.userPW} navigator={navigator}/>;
        }
    },

    //  以下两个生命周期函数,当这个组件被挂接到当前页面或被移除时,这两个函数会被调用
    //  viewDidAppear
    componentDidMount() {
        //  声明了名为navigator的变量并赋值
        var navigator = this._navigator;
        //  设置安卓手机后退事件监听器 - RN的监听通知写法, 参数 -> 通知名\处理此通知的闭包
        BackAndroid.addEventListener('NaviModuleListener', () => {
            //  后退键被按下时,会检测当前navigator变量是否存在,并判断导航路径长度是否大于1.
            //  若>1,则表示至少由一个上一级,能返回. 否则,没有上一级,不返回
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    },
    //  viewWillDisappear
    componentWillUnmount() {
        //  移除通知监听
        BackAndroid.removeEventListener('NaviModuleListener');
    },
    
    render() {
        return (
            <Navigator 
                initialRoute = {{name:'register'}}
                configureScene = {this._configureScene}
                renderScene = {this._renderScene}
            />
        );
    }
});

module.exports = NaviModule;
