/**
 * Created by Azen on 16/8/29.
 */

/**
 * 1. margin的用法
 * 2. flex和width的用法
 * */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class ViewDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerViewStyle}>

                </View>
                <View style={styles.innerViewStyle}>

                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    innerViewStyle: {
        backgroundColor: 'green',
        // width: 200,
        height: 250,
        flex: 1,
        // margin: 15
        marginLeft: 30,
        marginBottom: 30,
        marginTop: 20,
    },

})

module.exports = ViewDemo
