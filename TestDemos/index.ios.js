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

var HelloWord = require('./examples/LessonExamples/IA-HelloWord');
var ViewDemo = require('./examples/LessonExamples/IB-ViewDemo');
var FlexDemo = require('./examples/LessonExamples/IC-FlexDemo');
var ImageDemo = require('./examples/LessonExamples/ID-ImageDemo');
var ImageDemoList = require('./examples/LessonExamples/IIA-ImageDemo');
var TextInputDemo = require('./examples/LessonExamples/IIB-TextInputDemo');
var QQLoginBox = require('./examples/LessonExamples/IIC-QQLoginBox');
var LifeCircle = require('./examples/LessonExamples/IID-LifeCircleDemo');
var ScrollDemo = require('./examples/LessonExamples/IIE-ScrollDemo');
var LoopPage = require('./examples/LessonExamples/IIF-LoopPageDemo');
var ListDemo = require('./examples/LessonExamples/IIG-ListDemo');
var CollectionDemo = require('./examples/LessonExamples/IIIA-ListDemoForCollection');
var SectionDemo = require('./examples/LessonExamples/IIIB-ListDemoForSectionList');
var TabBarDemo = require('./examples/LessonExamples/IIIC-TabBarDemo');
var NewsMain = require('./examples/LessonExamples/IIID-News/Main');

var Project19 = require('./examples/BookExamples/XA-2-1');
var Book2_3 = require('./examples/BookExamples/XA-2-3');

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
        // <LoopPage />
        // <ListDemo />
        // <CollectionDemo />
        // <SectionDemo />
        // <TabBarDemo />
        // <NewsMain />

        // <Project19 />
        <Book2_3 />
    );
  }
}


AppRegistry.registerComponent('TestDemos', () => TestDemos);
