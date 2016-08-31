/**
 * Created by Azen on 16/8/29.
 * 1. Image加载网络图片
 * 2. Image加载本地图片
 * 3. Image的缩放模式
 * 4. Image作为背景图片
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'

class ImageDemo extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image source = {require('./../../img/img_01.jpg')} style={styles.imgStyle}/>
                {/*图片没加载出来,怀疑是Https的原因*/}
                <Image source = {{uri: 'http://img20.360buyimg.com/da/jfs/t2857/180/2240564077/79448/c5e34df3/575d21e3Naf20cac7.jpg'}} style = {{width: 170, height: 165, backgroundColor: 'red', resizeMode: 'contain'}} />
                <Image source = {{uri: 'icon_01'}}
                        style = {{width: 165, height: 165, backgroundColor: 'red', resizeMode: 'contain'}}/>
                <Image source = {require('./../../img/img_02.jpg')} style={styles.imgStyle}>
                    <Text style={{marginTop:30, backgroundColor: 'transparent'}}>我是一段文字</Text>
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imgStyle: {
        width: 250,
        height: 120
    }
})

module.exports = ImageDemo