/**
 * Created by Azen on 16/8/30.
 * 1. 设置数据源
 */

'use strict';
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

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(WineData)
        }
    },

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this._setupRenderRow}
            />
        )
    },

    _setupRenderRow(rowData, sectionID, rowID) {
        console.log(rowData.image + '----' + sectionID + '------' + rowID);
        return (
            <TouchableOpacity onPress={() => alert('第'+sectionID+'组,'+rowID+'行')}>
                <View style = {{flexDirection: 'row', borderBottomColor: '#dddddd', borderBottomWidth: 0.5}}>
                    <Image source = {{uri: rowData.image}} style = {styles.imgStyle} />
                    <View style = {{width: 275, justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: 'red', marginBottom: 3}}>{rowData.name}</Text>
                        <Text style={{color: 'orange'}}>${rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'yellow'
    },
    imgStyle: {
        width: 60,
        height: 60,
        margin: 10
    },

});

module.exports = ListDemo;