/**
 * Created by Azen on 16/9/4.
 * 1. 分组模式
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    ListView,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

var carData = require('../../LocalData/Car.json');

var SectionList = React.createClass({

    getInitialState() {

        var _analysisSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var _analysisRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' +rowID];
        };

        return {
            dataSource: new ListView.DataSource({
                getSectionData: _analysisSectionData,
                getRowData: _analysisRowData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (header1, header2) => header1 !== header2
            })
        }
    },

    render() {
        return(
            <View style={styles.container}>
                {/*头部*/}
                <View style={{height: 64, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>这是一大堆汽车!</Text>
                </View>
                {/*List 部分*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._setupRows}
                    renderSectionHeader={this._setupSectionHeader}
                />
            </View>
        )
    },

    _setupRows(rowData, sectionID, rowID) {
        console.log(rowData);
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', margin: 10, borderBottomWidth:0.5, borderBottomColor: '#dddddd', paddingBottom: 5}}>
                <Image source={{uri: rowData.icon}} style={{width: 50, height: 50, marginRight: 7}}/>
                <Text>{rowData.name}</Text>
            </View>
        )
    },

    _setupSectionHeader(sectionData, sectionID) {
        return (
            <View>
                <View style={{backgroundColor: 'gray', height: 25, justifyContent: 'center'}}>
                    <Text style={{color:'orange', fontSize: 16, fontWeight: 'bold', paddingLeft: 5}}>{sectionData}</Text>
                </View>
            </View>
        )
    },

    //  在此生命周期方法中,解析数据,并更新state & 刷新界面
    componentDidMount(){
        this._analysisDataFromJSON();
    },

    _analysisDataFromJSON() {
        var jsonData = carData.data;

        var dataBlob = {},  //  数据二维数组,dataBlod[i]表示第一纬数组, dataBlod[i:j]表示第二纬数组
            sectionIDs = [],    //
            rowIDs = [],
            cars = [];

        for(var i=0; i<jsonData.length; i++){
            sectionIDs.push(i);
            dataBlob[i] = jsonData[i].title;
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            for(var j=0; j<cars.length; j++){
                rowIDs[i].push(j);
                dataBlob[i+":"+j] = cars[j];
                console.log(i+":"+j)
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
});

module.exports = SectionList;