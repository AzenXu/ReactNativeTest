/**
 * Created by Azen on 16/8/30.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var WineData = require('./../../LocalData/WineData.json');

var ListDemo = React.createClass({

    getInitialState() {

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return {
            dataSource: ds.cloneWithRows(WineData)
        }
    },

    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'yellow'
    }
});

module.exports = ListDemo;