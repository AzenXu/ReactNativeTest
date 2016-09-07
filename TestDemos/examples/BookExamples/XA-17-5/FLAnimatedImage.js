/**
 * Created by Azen on 16/9/7
 */

import React, { Component } from 'react';
import {
    requireNativeComponent,
    NativeModules,
    View
} from 'react-native';
var {
    ScaleToFill,
    ScaleAspectFit,
    ScaleAspectFill
} = NativeModules.RNFLAnimatedImageManager; //  导出OC中定义的夸语言常量
var MODES = {
    'stretch': ScaleToFill,
    'contain': ScaleAspectFit,
    'conver': ScaleAspectFill
};
var FLAnimatedImage = React.createClass({
    propTypes: {                            //  在RN侧设置私有组件支持的属性
        contentMode: React.PropTypes.number,
        src: React.PropTypes.string,
        resizeMode: React.PropTypes.string,
        onFrameChage: React.PropTypes.func,
        ...View.propTypes   //  ES6 的剩余和延展属性,声明私有组件
    },
    render() {
        var contentMode = MODES[this.props.resizeMode] || MODES.stretch;
        return (
            <RNFLAnimatedImage
                {...this.props}
                contentMode={contentMode}
            />
        )
    }
});

var RNFLAnimatedImage = requireNativeComponent('RNFLAnimatedImage', FLAnimatedImage);
module.exports = FLAnimatedImage;
