/**
 * Created by Azen on 16/8/29.
 * 1. 综合练习flexBox布局
 * 2. 点击事件
 * 3. Touchable组件 & 事件
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');

class QQLoginBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/icon.png')} style={{width:80, height:80, borderRadius: 40, marginTop: 60, borderWidth: 3, borderColor: 'rgba(255,255,255,0.7)'}}/>
                {/*用户名和密码*/}
                <View style={{marginTop: 30}}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="请输入用户名"
                        clearButtonMode="always"
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="请输入密码"
                        clearButtonMode="always"
                        password={true}
                    />
                </View>
                {/*登录按钮*/}
                <View style={{width:width*0.8, height:40, backgroundColor:'red',marginTop:20,borderRadius:7,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:17}} onPress={()=>{alert('点击点击点个头')}}>登 录</Text>
                </View>
                {/*快速设置*/}
                <View style={{width:width*0.92, marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                    <Text onclick={()=>{alert('那就别登录了')}}>无法登录?</Text>
                    <Text onclick={()=>{alert('太好了,又有新韭菜送上门了')}}>新用户</Text>
                </View>
                {/*其他登录方式*/}
                <View style={{position:'absolute', left:10, bottom:10, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={()=>{alert('别点我!微信大爷你惹得起嘛!')}}
                    >
                        <Image source={require('./img/icon7.png')} style={styles.bottomIconStyle}/>
                    </TouchableOpacity>
                    <Image source={require('./img/icon3.png')} style={styles.bottomIconStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.bottomIconStyle}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flex:1,
        alignItems:'center'
    },
    inputStyle: {
        backgroundColor:'white',
        height:38,
        width:width - 20,
        marginBottom:1,
        textAlign:'center',
        marginLeft:10,
        marginRight:10,
        borderRadius:19
    },
    bottomIconStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 7
    }
})

module.exports = QQLoginBox
