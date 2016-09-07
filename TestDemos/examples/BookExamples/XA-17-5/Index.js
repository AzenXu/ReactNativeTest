/**
 * Created by Azen on 16/9/7.
 */

'use strict';
import React, { Component } from 'react';
var FLAnimatedImage = require('./FLAnimatedImage');
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var Demo = React.createClass({
    render() {
        return (
            <View style={{flex:1}}>
                <FLAnimatedImage style={{flex:1}} src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" resizeMode="contain" />
                <Text style={{position:'absolute', top:320, left:50, height: 40, fontSize: 30, backgroundColor: 'transparent'}}>
                    Hello, world
                </Text>
            </View>
        )
    }
});

module.exports = Demo;