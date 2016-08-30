/**
 * Created by Azen on 16/8/29.
 */

/**
 * 1. import的写法
 * 2. class的创建方式
 * 3. 子模块的创建与引用
 * 4. StyleSheet的用法
 * 5. flexBox布局
 * */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class HelloWord extends  Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    哈哈哈我进来了,Hello Word
                </Text>
            </View>
        )
    }
}

var HellowWordES5 = createClass({
    render() {
        return (
            <View>
                
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:  'white',
    }
})

module.exports = HelloWord;