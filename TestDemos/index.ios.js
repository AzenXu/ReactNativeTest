/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var HelloWord = require('./IA-HelloWord')
var ViewDemo = require('./IB-ViewDemo')
var FlexDemo = require('./IC-FlexDemo')
var ImageDemo = require('./ID-ImageDemo')
var ImageDemoList = require('./IIA-ImageDemo')
var TextInputDemo = require('./IIB-TextInputDemo')
var QQLoginBox = require('./IIC-QQLoginBox')
var LifeCircle = require('./IID-LifeCircleDemo')
var ScrollDemo = require('./IIE-ScrollDemo')
var LoopPage = require('./IIF-LoopPageDemo')

class TestDemos extends Component {
  render() {
    return (
        // <HelloWord />
        // <ViewDemo />
        // <FlexDemo />
        // <ImageDemo />
        // <ImageDemoList />
        // <TextInputDemo />
        // <QQLoginBox />
        // <LifeCircle />
        // <ScrollDemo />
        <LoopPage />
    );
  }
}


AppRegistry.registerComponent('TestDemos', () => TestDemos);
