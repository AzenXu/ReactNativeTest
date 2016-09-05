/**
 * Created by Azen on 16/9/4.
 */

'use strict';

import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TabBarIOS,
    NavigatorIOS,
    StyleSheet
} from 'react-native'

var Home = require('./Components/Home');
var Finder = require('./Components/Finder');
var Message = require('./Components/Message');
var Mine = require('./Components/Mine');

var Main = React.createClass({

    getInitialState() {
        return {
            selectedTabItem:'home'
        }
    },

    render() {
        return(
            <TabBarIOS>
                <TabBarIOS.Item
                    title='首页'
                    onPress={()=>this.setState({selectedTabItem:'home'})}
                    selected={this.state.selectedTabItem == 'home'}
                >
                    <NavigatorIOS
                        initialRoute={{
                            component:Home,
                            title:'首页',
                        }}
                        style={{flex:1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title='发现'
                    onPress={()=>this.setState({selectedTabItem:'find'})}
                    selected={this.state.selectedTabItem == 'find'}
                >
                    <NavigatorIOS
                        initialRoute={{
                            component:Finder,
                            title:'发现'
                        }}
                        style={{flex:1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title='消息'
                    onPress={()=>this.setState({selectedTabItem:'message'})}
                    selected={this.state.selectedTabItem == 'message'}
                >
                    <NavigatorIOS
                        initialRoute={{
                            component:Message,
                            title:'消息'
                        }}
                        style={{flex:1}}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title='我的'
                    onPress={()=>this.setState({selectedTabItem:'mine'})}
                    selected={this.state.selectedTabItem == 'mine'}
                >
                    <NavigatorIOS
                        initialRoute={{
                            component:Mine,
                            title:'我的'
                        }}
                        style={{flex:1}}
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow'
    }
});

module.exports = Main