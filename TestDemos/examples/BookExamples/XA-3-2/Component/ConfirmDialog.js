/**
 * Created by Azen on 16/9/6.
 */

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Dimensions
} from 'react-native';

let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

let ConfirmDialog = React.createClass({
    //  提示传入参数类型的
    propTypes: {
        userConfirmed: React.PropTypes.func.isRequired,
        userCanceled: React.PropTypes.func.isRequired,
        amIStillAlive: React.PropTypes.func.isRequired,
        promptToUser: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <View style={styles.confirmCont}>
                <View style={styles.dialogStyle}>
                    <Text style={styles.dialog}>{this.props.promptToUser}</Text>
                    <Text style={styles.yesButton}
                          onPress={this.props.userConfirmed}
                          numberOfLines={3}
                    >{'\r\n'}确 定</Text>
                    <Text style={styles.cancelButton}
                          onPress={this.props.userCanceled}
                          numberOfLines={3}
                    >{'\r\n'}取 消</Text>
                </View>
            </View>
        )
    }
});

let styles = StyleSheet.create({
    confirmCont: {
        position:'absolute',
        top:0,
        width:totalWidth,
        height:totalHeight,
        backgroundColor:'rgba(52,52,52,0.5)'
    },
    dialogStyle: {
        position:'absolute',
        top:totalHeight * 0.4,
        left:totalWidth / 10,
        width: totalWidth * 0.8,
        height: totalHeight * 0.3,
        backgroundColor: 'white'
    },
    textPrompt: {
        position: 'absolute',
        top:10,
        left:10,
        fontSize:20,
        color:'black'
    },
    yesButton: {
        position: 'absolute',
        bottom:10,
        left:10,
        width:totalWidth * 0.35,
        height:totalHeight * 0.12,
        backgroundColor: 'gray',
        fontSize:20,
        color:'white',
        textAlign:'center'
    },
    cancelButton: {
        position:'absolute',
        bottom:10,
        right:10,
        width:totalWidth * 0.35,
        height:totalHeight * 0.12,
        backgroundColor: 'gray',
        fontSize:20,
        color:'white',
        textAlign:'center'
    }
});

module.exports = ConfirmDialog;
