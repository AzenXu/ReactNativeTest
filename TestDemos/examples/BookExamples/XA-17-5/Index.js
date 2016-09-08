/**
 * Created by Azen on 16/9/7.
 */

'use strict';
import React, { Component } from 'react';
var FLAnimatedImage = require('./FLAnimatedImage');
var GradientView = require('./GradientView');
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

var Demo = React.createClass({
    render() {
        return (
            <GradientView style={{flex:1, justifyContent: 'center', alignItems: 'center'}} locations={[0, .5, 1.0]} colors={['yellow', 'orange', 'red']}>
                <Text style={{fontSize: 30, backgroundColor: 'transparent', color: 'blue'}}>
                    Hello, world
                </Text>
            </GradientView>
        )
    }
});

module.exports = Demo;
