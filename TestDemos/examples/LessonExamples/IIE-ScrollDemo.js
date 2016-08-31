/**
 * Created by Azen on 16/8/30.
 * 1. 熟练自定义函数 & for循环写法
 * 2. ScrlooView属性
 * 3. 注意array.length而非array.count
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native'

class ScrollDemo extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <ScrollView
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    scrollEnabled={true}
                    scrollsToTop={true}
                >
                    {this.setupViews()}
                </ScrollView>
            </View>
        )
    }

    setupViews() {
        var scrollItems = [];
        var colors = ['red', 'blue', 'orange', 'white', 'black', 'gray', 'yellow'];
        //  注意这里是color.length,之前用colors.count,不能显示出子view.
        for(var i = 0;i < colors.length;i++) {
            scrollItems.push (
                <View
                    key = {i}
                    style={{backgroundColor:colors[i], width:375, height: 100, margin: 20}}
                ></View>
            )
        }
        // alert(colors.length)
        return scrollItems;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green'
    }
})

module.exports = ScrollDemo