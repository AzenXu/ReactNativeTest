/**
 * 日记Demo
 * @flow
 */

'use strict';

import React, { Component } from 'react'; import { AppRegistry, StatusBarIOS,
AsyncStorage, View } from 'react-native';

let DiaryList = require('./Components/DiaryList');
// let DiaryWriter = require('./DiaryWriter');
// let DiaryReader = require('./DiaryReader');

let DiaryDemo = React.createClass({
  _showDiaryList: function() {
    return (
      <DiaryList />
    );
  },
  // _showDiaryReader: function() {
  //   return (
  //     <DiaryReader />
  //   );
  // },
  // _showDiaryWriter: function() {
  //   return (
  //     <DiaryWriter />
  //   );
  // },

  componentWillMount: function() {

  },

  render: function() {
    return this._showDiaryList();
  }
});

AppRegistry.registerComponent('HelloRN', () => DiaryDemo);
