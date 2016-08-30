/**
 * Created by Azen on 16/8/29.
 * 1. TextInput的属性
 * 2. 设置边框
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native'

class TextInputDemo extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType="number-pad"
                    placeholder="我是占位符"
                    placeholderTextColor="blue"
                    clearButtonMode="always"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green'
    },
    textInputStyle: {
        width:350,
        height:38,
        marginTop:30,
        borderWidth:1,
        borderColor:'orange',
        borderRadius:6,
        paddingLeft:10,
        color:'red'
    }
})

module.exports = TextInputDemo