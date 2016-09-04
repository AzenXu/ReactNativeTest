/**
 * Created by Azen on 16/9/4.
 * 1. 使用ListView 实现 UICollectionView效果
 */
import React, { Component } from 'react';
import {
    View,
    ListView,
    Image,
    Text,
    StyleSheet
} from 'react-native'

var CollectionView = React.createClass({
    render() {
        return(
            <View style={styles.container}>
                
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

module.exports = CollectionView;