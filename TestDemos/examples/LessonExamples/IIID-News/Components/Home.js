/**
 * Created by Azen on 16/9/4.
 * 1. NavigatorIOS的跳转方式this.props.navigator.push
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TabBarIOS,
    TouchableOpacity,
    ListView,
    Dimensions,
    StyleSheet
} from 'react-native'

let {width, height, scale} = Dimensions.get('window');

var Detail = require('./NewsDetail');

var NewsList = require('../../../../LocalData/newsList.json');

var Home = React.createClass({

    // getDefaultProps() {
    //     return {
    //         api_url:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&prog=LTitleA&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=10.0&spever=false&net=wifi&lat=OE2o91%2BdCgD9VXeccYsfcA%3D%3D&lon=8Whxhxqf2kLzoYzuxQSj8g%3D%3D&ts=1466144911&sign=LLf1WR95qTMaen6vExFhEqcEtZMdgJGKbkCjBPvnsUt48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
    //         keyWord:'T1348647853363'
    //     }
    // },
    //
    // getInitialState() {
    //     return {
    //         _dataSource: new ListView.DataSource({rowHasChanged:(row1,row2) => row1 !== row2}),
    //         _loopPageItems: []
    //     }
    // },

    render() {
        return(
            // <ListView
            //     dataSource={this.state._dataSource}
            //     renderRow={this._renderRows}
            //     renderHeader={this._renderHeader}
            // />
            <View style={styles.container}>

            </View>
        )
    },
    //
    // //  处理复杂逻辑的声明周期方法
    // componentDidMount() {
    //     this._requestData();
    // },
    //
    // _renderHeader() {
    // },
    //
    // _renderRows(rowData) {
    //     return(
    //         <TouchableOpacity
    //             onPress={()=>this._pushToNewsDetail(rowData.docid)}
    //         >
    //             <View style={{borderBottomWidth:0.5, borderBottomCOlor:'#dddddd', flexDirection:'row'}}>
    //                 <Image source={{uri:rowData.imgsrc}} style={{height:80, width: 80, margin: 8}}/>
    //                 <View style={{marginTop:8, width:width - 115}}>
    //                     <Text style={{fontSize:15, color:'orange'}} numberOfLines={1}>{rowData.title}</Text>
    //                     <Text style={{fontSize:12, color:'gray', marginTop:5}} numberOfLines={2}>{rowData.digest}</Text>
    //                 </View>
    //                 <Text>跟帖数:</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // },
    //
    // _dealWithData(dataArr) {
    //
    //     var listArr = [];
    //     var loopPageItems = [];
    //
    //     for(var i = 0; i < dataArr.length; i++) {
    //         var item = dataArr[i];
    //         if (item.hasAD == 1) {
    //             loopPageItems = item.ads;
    //         } else {
    //             listArr.push(item);
    //         }
    //     }
    //
    //     console.log(listArr, loopPageItems);
    //
    //     this.setState({
    //         _dataSource:this.state.dataSource.cloneWithRows(listArr),
    //         _loopPageItems:loopPageItems
    //     })
    // },
    //
    // _requestData() {
    //     fetch(this.props.api_url)
    //         .then((response) => response.json())
    //         .then((responseData)=>{
    //             var dataArr = responseData[this.props.keyWord];
    //             this._dealWithData(dataArr);
    //         })
    //         .catch((error)=>{
    //             //  报错,则导入本地预存数据
    //             var dataArray = NewsList[this.props.keyWord];
    //             this._dealWithData(dataArray)
    //         })
    // },
    //
    // _pushToNewsDetail(itemID) {
    //     this.props.navigator.push({
    //         title:'详情页',
    //         component: Detail,
    //         passProps:{itemID}
    //     })
    // }
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