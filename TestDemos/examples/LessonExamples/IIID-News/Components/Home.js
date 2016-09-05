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

var Home = React.createClass({
    render() {
        return(
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = Home;