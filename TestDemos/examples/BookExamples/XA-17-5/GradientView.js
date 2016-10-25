/**
 * Created by Azen on 16/9/7.
 */
/*
import React from 'react';   //  processColor?
import {
    requireNativeComponent,     //  这个东东是用来引本地模块的
    processColor                // 这个东东是用来处理颜色的,使颜色能够跨平台
} from 'react-native';

let RNGradientView = requireNativeComponent('RNGradientViewSwift', GradientView);   //  把名叫参数一的原生类,生成名叫参数二的RN类-这个RN包装了真正的和原生对接的RN类. 同时返回真正和原生对接的RN类

class GradientView extends React.Component {
    render() {
        let { colors, ...otherProps } = this.props; //  猜:拿到所有传进来的属性
        alert(this.props.colors);
        alert(this.props.locations);
        return <RNGradientView {...otherProps} colors={colors.map(processColor)} />;    //  将传进来的属性传给原生模块 - Color做一层处理 注意!看阙喜涛老师书的孩纸,书上这句代码写错了!!
        //  上面这句代码解析 -> 拿这个RN类的时候,调了OC文件RNOCGradientView.m文件12行 -> 通过 RNGradientViewSwift 找到了RNGradientViewManager.swift文件的第11行,调起了第14行,创建了RNGradientView类
        //  之后为RNGradientView类的属性赋值.
    }
}

GradientView.propTypes = {
    colors: React.PropTypes.array.isRequired,
    locations: React.PropTypes.array
};

module.exports = GradientView;
 */