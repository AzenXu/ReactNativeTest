'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions
} from 'react-native';

let {width, height, scale} = Dimensions.get('window');
let leftMarin = width * 0.1;
let componentWidth = width * 0.8;
let ConfirmDialog = require('./ConfirmDialog');

let RegistLeaf = React.createClass({

    getInitialState() {
        return {
            inputedNum: '',
            inputedPW: '',
            needToConfirm: false
        }
    },

    _updateNum: function(newText) {
        // this.setState({inputedNum:newText})
        this.setState((oldState)=>{
            for (var aName in oldState) {
                console.log(aName);
                console.log(oldState[aName]);
            }
            return {
                inputedNum:newText,
                aBrandnewStateVariable:'I am a new variable.'
            }
        },this._changeNumberDone)
    },

    _changeNumberDone() {
        console.log('修改inputedNumber完毕')
    },

    _updatePW: function (newText) {
        this.setState((state) => {
            return {
                inputedPW:newText
            }
        })
    },

    render() {
        if (this.state.needToConfirm) return this._renderWithDialog();
        return (
            <View style = {styles.container}>
                <TextInput
                    style={{width: 300, height: 40, backgroundColor: 'gray', alignSelf: 'center', margin: 20}}
                    placeholder={'请输入手机号'}
                    onChangeText={(newText => this._updateNum(newText))}
                />
                <Text style = {{margin: 20, width: 300, height: 30, fontSize: 16}}>您输入的手机号:{this.state.inputedNum}</Text>
                <TextInput
                    placeholder={'请输入密码'}
                    password={true}
                    style={{width: 300, height: 40, backgroundColor: 'gray', alignSelf: 'center', margin: 20}}
                    onChangeText={this._updatePW}
                />
                <Text style = {{width: 200, height: 30, borderRadius: 6, backgroundColor: 'black', color: 'white', fontSize: 28, textAlign: 'center'}}
                      onPress={this._userPressConfirm}>确  定</Text>
            </View>
        )
    },

    _renderWithDialog() {
        console.log('renderWithDialog');
        return(
            <View style = {styles.container}>
                <TextInput
                    style={{width: 300, height: 40, backgroundColor: 'gray', alignSelf: 'center', margin: 20}}
                    placeholder={'请输入手机号'}
                    onChangeText={(newText => this._updateNum(newText))}
                />
                <Text style = {{margin: 20, width: 300, height: 30, fontSize: 16}}>您输入的手机号:{this.state.inputedNum}</Text>
                <TextInput
                    placeholder={'请输入密码'}
                    password={true}
                    style={{width: 300, height: 40, backgroundColor: 'gray', alignSelf: 'center', margin: 20}}
                    onChangeText={this._updatePW}
                />
                <Text style = {{width: 200, height: 30, borderRadius: 6, backgroundColor: 'black', color: 'white', fontSize: 28, textAlign: 'center'}}
                      onPress={this._userPressConfirm}>确  定</Text>
                <ConfirmDialog userConfirmed={this._userConfirmed}
                                userCanceled={this._userCanceled}
                                promptToUser={'使用'+this.state.inputedNum+'号码登录?'}/>
            </View>
        )
    },

    _userPressConfirm() {
        // this.props.navigator.push({
        //     phoneNumber: this.state.inputedNum,
        //     userPW: this.state.inputedPW,
        //     name:'waiting'
        // });
        // this.props.navigator.replace({
        //     phoneNumber: this.state.inputedNum,
        //     userPW: this.state.inputedPW,
        //     name:'waiting'
        // });
        this.setState((state) => {
            return {
                needToConfirm: true
            };
        });
    },

    _userCanceled() {
        this.setState((state)=>{
            return {
                needToConfirm: false
            };
        });
    },

    _userConfirmed() {
        this.setState((state)=>{
            return {
                needToConfirm: false
            }
        });
        this.props.navigator.replace({
            phoneNumber: this.state.inputedNum,
            userPW: this.state.inputedPW,
            name:'waiting'
        });
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

module.exports = RegistLeaf;