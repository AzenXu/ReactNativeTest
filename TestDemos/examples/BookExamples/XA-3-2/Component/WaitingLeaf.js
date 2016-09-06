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
