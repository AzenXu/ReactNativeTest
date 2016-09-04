/**
 * Created by Azen on 16/9/4.
 * 1. TabBarIOS.Item下面必须有子元素,否则会报错
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TabBarIOS
} from 'react-native';

var TabBarDemo = React.createClass({

    getInitialState() {
        return {
            selectedTabItem: 0
        }
    },

    render() {
        return(
            <View style={styles.container}>
                <View style={{height: 64, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>Tab切换</Text>
                </View>
                <TabBarIOS>
                    <TabBarIOS.Item
                        title="哈哈"
                        onPress={()=>this.setState({selectedTabItem:0})}
                        selected={this.state.selectedTabItem == 0}
                    >
                        {/*Item下面必须有子View才能运行,否则会报错 - onlyChild*/}
                         <View></View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        onPress={()=>this.setState({selectedTabItem:1})}
                        selected={this.state.selectedTabItem == 1}
                    >
                        <View></View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="history"
                        onPress={()=>this.setState({selectedTabItem:2})}
                        selected={this.state.selectedTabItem == 2}
                    >
                        <View></View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        onPress={()=>this.setState({selectedTabItem:3})}
                        selected={this.state.selectedTabItem == 3}
                    >
                        <View></View>
                    </TabBarIOS.Item>
                </TabBarIOS>
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

module.exports = TabBarDemo
