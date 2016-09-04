/**
 * Created by Azen on 16/9/4.
 */


import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TabBarIOS,
    StyleSheet
} from 'react-native'

var Message = React.createClass({
    render() {
        return(
            <View style={styles.container}>
                <Text>消息</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'pink'
    }
});

module.exports = Message;