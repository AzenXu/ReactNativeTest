/**
 * Created by Azen on 16/8/30.
 * 1. 解析JSON的时候要看好JSON数据的格式
 * 2. 定时器的用法
 * 3. App运行中加载到工程中的图片,要重启App下才能看到
 * 4. scrollView.scrollResponderScrollTo
 * 5. this.clearInterval    定时器清除时间
 * 6. scrollView onMomentumScrollEnd 当一帧滚动结束 e-> 滚动事件
 * 7. scrollView onScrollBeginDrag 开始拖拽 -> 清除定时器
 *
 * 这个联系没做完,定时器没生效. 还需要再看看
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native'

var imageData = require('./LocalData/ImageDataForScroll.json');
var TimerMixin = require('react-timer-mixin');

let {width} = Dimensions.get('window');

let LoopPage = React.createClass({

    //  注册计时器
    mixins: [TimerMixin],

    getDefaultProps() {
        return {
            durationTime: 1000
        }
    },

    //  用状态机来刷UI
    getInitialState() {
        return {
            currentPage: 0
        }
    },

    render() {
        return (
            <ScrollView style = {styles.container}
                        ref="scrollView"        //  这个标识有啥用?
                        pagingEnabled={true}
                        horizontal={true}
                        onMomentumScrollEnd={(e)=>this._scrollEnd(e)}    //  当一帧滚动结束 e-> 滚动事件
                        onScrollBeginDrag={()=>this._beginDrag()}        //  开始拖拽 -> 清除定时器
                        onScrollEndDray={()=>this._endDrag()}            //  结束拖拽
            >
                {this._updateSubviews()}
            </ScrollView>
        )
    },

    _updateSubviews() {
        var views = [];
        for (var i = 0;i < imageData.data.length;i++) {
            let item = imageData.data[i];
            views.push(
                <View key={i} style={{width:width - 20, height: 140, margin: 10, backgroundColor:'yellow'}}>
                    <Image
                        style = {{width:width - 20, height: 140, justifyContent: 'center', alignItems: 'center'}}
                        source = {{uri: item.img}}
                    >
                        <Text>{item.title}</Text>
                    </Image>
                </View>
            )
        }
        return views;
    },

    _scrollEnd(e) {
        //  求出水平方向的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //  求出当前的页码
        var currentPage = offSetX / width;
        //  更新状态机,重绘相关UI -> 不写下面这句会报错,说函数没定义..这是为啥?
        this.setState({
            currentPage: currentPage
        })
    },

    _beginDrag() {
        this.clearInterval(this.timer);
    },

    _endDrag() {
        this._startTimer();
    },

    _startTimer() {
        //  拿到scrollView
        var scrollView = this.refs.scrollView;
        //  添加计时器
        this.timer = this.setInterval(function () {
            //  临时变量
            var activePage;
            //  取出数据数组
            var imgDataArr = ImageData.data;
            //  判断是否为最后一页
            if(this.state.currentPage + 1 >= imgDataArr.length) {
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1
            }
            //  滚动
            var offsetX = activePage * width;   //  计算X轴偏移量
            scrollView.scrollResponderScrollTo({x:offsetX, y:0, animated:true});

            //  更新状态
            this.setState({currentPage:activePage});
        }, this.props.durationTime);
    }
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green'
    }
});

module.exports = LoopPage;
