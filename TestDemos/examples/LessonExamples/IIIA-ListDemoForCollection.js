/**
 * Created by Azen on 16/9/4.
 * 1. 使用ListView 实现 UICollectionView效果 -> 通过设置contentContainerStle的主轴方向达到所需效果
 */
import React, { Component } from 'react';
import {
    View,
    ListView,
    Image,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

var {width, height, scale} = Dimensions.get('window');

var datas = require('../../LocalData/shareData.json').data;

//  define vars
var cols = 2;
var itemHW = 100 * scale / 2;
var vMargin = (width - cols * itemHW) / (cols + 1);
var hMargin = 25;

var CollectionView = React.createClass({

    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        return {
            dataSource: ds.cloneWithRows(datas)
        }
    },

    render() {
        console.log(datas);
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._setupRenderRow}
                contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}    //  通过设置内容样式主轴方向, 达到collectionView的效果.
            >

            </ListView>
        )
    },

    //  customFuncs
    _setupRenderRow(rowData, sectionID, rowID) {
        return(
            <View style={{width:itemHW, height:itemHW, justifyContent:'center', alignItems:'center', marginLeft:vMargin, marginTop:hMargin}}>
                <Image source={{uri:rowData.icon}}
                style={{width: itemHW - 20, height: itemHW - 20, marginBottom: 3}}/>
                <Text>{rowData.title}</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});

module.exports = CollectionView;