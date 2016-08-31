/**
 * Created by Azen on 16/8/29.
 * 1. 牢记生命周期方法及其作用（这里只有两个,没有列举完.还需要总结下）
 * 2. props\state两个东东的区别 -> props不变,state可变,变一次刷一次UI
 * 3. state（状态机）的设置方法:setState() -> 这个方法相当于swift字典的update,有key就改值,没key就插入这个key.state的本质是一个字典,setState方法会默认传给你一个oldState的参数,包含了所有旧的state们
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

var LifeCircleDemo = React.createClass({
    getDefaultProps() {
        return {
            name:'小小酥'
        }
    },

    getInitialState() {
        return {
            age: 18
        }
    },

    testFunc() {
        this.setState({age:this.state.age+1})
        alert(this.state.age)
    },

    render() {
        return (
            <View style={styles.container}>
                <Text>姓名:{this.props.name}</Text>
                <Text style={{fontSize:this.state.age}}>年龄:{this.state.age}</Text>

                <TouchableOpacity onPress={()=>this.testFunc()}>
                    <View style={{width: 300, height: 20, backgroundColor: 'red', marginTop: 50}}><Text>点我试试~</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

module.exports = LifeCircleDemo