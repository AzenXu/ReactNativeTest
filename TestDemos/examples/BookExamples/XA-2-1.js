/**
 * Created by Azen on 16/8/31.
 * 《RN跨平台移动应用开发代码2-1》
 * 知识点:
 * 1. 'use strict' 
 * 2. PixelRatio（记录逻辑像素的密度） 和 scale（记录缩放比例） 好像没啥区别
 * 3. chrome调试 - console.log（打印普通的log信息） console.warn 打印醒目的console信息
 */

'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

let Dimensions = require('Dimensions');
let PixelRatio = require('PixelRatio');
let {width, height, scale} = Dimensions.get('window');     //  想用这种方法获取height 和 width ,就不能自定义变量名
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let pixelRatio = PixelRatio.get();

class Project19 extends Component {
    render() {
        let aValue;
        console.log('render has been executed.');
        console.log('totalHeight is:' + totalHeight);
        console.log('aValue is:' + aValue);
        console.warn('the type of aValue is:' + typeof(aValue));

        return (
            <View style = {styles.container}>
                <Text style = {styles.welcome}>PixelRatio = {pixelRatio}</Text>
                <Text style= {styles.welcome}>Scal = {scale}</Text>
                <Text style = {styles.instructions}>totalHeight = {totalHeight}</Text>
                <Text style = {styles.instructions}>height = {height}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color:  '#333333',
        marginBottom: 5
    }
});

module.exports = Project19;