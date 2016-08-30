/**
 * Created by Azen on 16/8/29.
 * 1. JS自定义函数写法（函数名后不用跟返回值类型）,直接return即可
 * 2. JSfor循环写法
 * 3. JS自定义函数调用方法{this.xxx()}
 * 4. 数组中加元素 -> array.push(元素)
 * 5. JSON的解析方式 -> 不用解析,导入直接调= =
 *
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    Text,
    StyleSheet
} from 'react-native';

//  九宫格布局

var data = require('./LocalData/datas.json');
var Dimensionss = require('Dimensions');
var {width, height, scale} = Dimensionss.get('window');

var cols = 3;
var itemWH = 100;
var vMargin = (width - cols * itemWH) / (cols + 1);
var hMargin = 25;

class ImageDemo extends Component {
    render() {
        return (
            <View style= {styles.container}>
                {this.getItems()}
            </View>
        )
    }

    getItems() {
        var itemArr = [];
        alert(data.length);
        for(var i = 0; i < data.length; i++) {
            var item = data[i];
            itemArr.push(
                <View style={styles.viewStyle} key={i}>
                    <Image source={{uri:item.icon}} style={styles.imageStyle}/>
                    <Text>{item.title}</Text>
                </View>
            )
        }
        return itemArr
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    viewStyle: {
        backgroundColor: 'red',
        width:itemWH,
        height:itemWH,
        alignItems: 'center',
        marginLeft: vMargin,
        marginTop: hMargin
    },
    imageStyle: {
        width: itemWH - 20,
        height: itemWH - 20
    }
}); 

//  这句的意思是把拿个类公开出去
module.exports = ImageDemo;