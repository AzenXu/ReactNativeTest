/**
 * Created by Azen on 16/8/31.
 * 注册页面
 */

'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions
} from 'react-native';

let {width, height, scale} = Dimensions.get('window');
let leftMarin = width * 0.1;
let componentWidth = width * 0.8;

let Project19 = React.createClass({
    render() {
        return (
            <View style = {styles.container}>
                <TextInput
                    style={{width: 300, height: 40, backgroundColor: 'gray', alignSelf: 'center', margin: 20}}
                    placeholder={'请输入手机号'}
                />
                <Text style = {{margin: 20, width: 300, height: 30, fontSize: 23}}>您输入的手机号:</Text>
                <Text style = {{width: 200, height: 30, borderRadius: 6, backgroundColor: 'black', color: 'white', fontSize: 28, textAlign: 'center'}}>确  定</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

module.exports = Project19