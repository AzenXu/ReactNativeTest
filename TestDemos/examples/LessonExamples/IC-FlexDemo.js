/**
 * Created by Azen on 16/8/29.
 * 1. FlexDirection的写法
 * 2. flex的用法
 * 3. justifyContent
 * 4. alignItems
 * 5. 行内样式
 * 6. 绝对定位和相对定位
 */


import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

var Dimensionsss = require('Dimensions')
var {width, height, scale} = Dimensionsss.get('window')

//  flexDirection\justifyContent\alignItems\行内样式\flex用法
class FlexDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor:'blue', height:120, flex:1}}>第一个</Text>
                <Text style={{backgroundColor:'red', height:100, flex:2}}>第二个</Text>
                <Text style={{backgroundColor:'orange', height: 90, flex:3}}>第三个</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        width: 375,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

//  flexWrap用法
class FlexDemo2 extends Component {
    render() {
        return(
            <View style = {styles2.container}>
                <Text style={{backgroundColor:'red', height:600, width:100}}>第一个</Text>
                <Text style={{backgroundColor:'blue', height:100, width:150}}>第二个</Text>
                <Text style={{backgroundColor:'green', height:90, width:200}}>第三个</Text>
                <Text style={{backgroundColor:'white', height:50, width:90}}>第四个</Text>
            </View>
        )
    }
}

const styles2 = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'orange',
        flexDirection:'row',
        flexWrap:'wrap'
    }
});

//  元素样式 alignSelf用法
class FlexDemo3 extends Component {
    render() {
        return (
            <View style = {styles3.container}>
                <Text style = {{backgroundColor: 'white', height: 120, flex: 1, alignSelf: 'flex-end'}}>第一个</Text>
                <Text style = {{backgroundColor: 'blue', height: 100, flex: 1}}>第二个</Text>
                <Text style= {{backgroundColor: 'black', height: 90, flex: 2, alignSelf: 'flex-start'}}>第三个</Text>
                <Text style = {{backgroundColor: 'red', height: 50, flex: 1}}>第四个</Text>
            </View>
        )
    }
}

const styles3 = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems:'center',
    }
});

//  Dimension的用法 & 字符串中插变量
class FlexDemo4 extends Component {
    render() {
        return (
            <View style = {styles4.container}>
                <Text>当前屏幕的宽度:{width}</Text>
                <Text>当前屏幕的高度:{height}</Text>
                <Text>当前屏幕的分辨率:{scale}</Text>
            </View>
        )
    }
}

const styles4 = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


//  绝对定位和相对定位
class FlexDemo5 extends Component {
    render() {
        return (
            <View style= {styles5.container}>
                <Text style= {styles5.textStyle}>绝对定位:</Text>
                <View style = {styles5.innerView}>
                    <View style = {styles5.testStyle1}>

                    </View>
                </View>
                <Text style = {styles5.textStyle}>相对定位:</Text>
                <View style = {styles5.innerView}>
                    <View style = {styles5.testStyle2}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles5 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    textStyle: {
        color: 'white',
        marginTop: 25,
    },
    innerView: {
        width: 375,
        height: 200,
        backgroundColor:'green'
    },
    testStyle1: {
        width: 60,
        height: 60,
        backgroundColor: 'yellow',
        borderRadius: 30,
        position: 'absolute',
        right: -20,
        bottom: 0
    },
    testStyle2: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 30,
        right: -20,
        bottom: 0
    }
})

module.exports = FlexDemo5;