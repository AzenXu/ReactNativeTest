/**
 * Created by Azen on 16/9/6.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

let WaitingLeaf = React.createClass({

    componentWillMount() {
        //  导入原始代码事件接收器
        var { NativeAppEventEmitter } = require('react-native');
        //  向事件接收器注册接收名为NativeModuleMsg的事件（和原生约定好的另一个接头暗号）,并指定处理函数
        this.NativeMsgSubscription = NativeAppEventEmitter.addListener(
            'NativeModuleMsg', (reminder)=>{this.handlerNativeInterfaceMsg(reminder.message);}
        )
    },

    handlerNativeInterfaceMsg(aMsg) {
        console.log('received msg from OC modue:'+aMsg);
        alert('收到了!' + aMsg);
    },

    render() {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
                <Text style={{fontSize:20}}>注册使用手机号:{this.props.phoneNumber}</Text>
                <Text style={{fontSize:20}}>注册使用密码:{this.props.userPW}</Text>
                <Text style={{fontSize:60, textAlign: 'center', color: 'white', backgroundColor: 'gray', width: 300}}
                       onPress = {this._goBack}>返回</Text>
            </View>
        )
    },

    _goBack() {
        // this.props.navigator.push({
        //     name: "register"
        // })
        //  测试replace函数
        this.props.navigator.replace({
            name:"register"
        });
    }
});

module.exports = WaitingLeaf;
