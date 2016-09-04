/**
 * Created by Azen on 16/8/30.
 * 1. 数据源
 * 2. 渲染方式
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
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});   //  固定写法,rowHasChange:表示,listView中,没有任意两行是相等的,为了性能优化考虑
        return {
            dataSource: ds.cloneWithRows(WineData)  //  也是固定写法. ListView.DataSource这个类,会到WineData做解析
        }
    },

    render() {
        return (
            <ListView
                dataSource = {this.state.dataSource}    //  设置数据源
                renderRow = {this._setupRenderRow}      //  设置渲染方式 -> 默认传给自定义函数四个参数,rowData -> DataSource解析后的行数据, sectionID -> 组号, rowID -> 行号
            />
        )
    },

    _setupRenderRow(rowData, sectionID, rowID) {        //  返回每一行的cell
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