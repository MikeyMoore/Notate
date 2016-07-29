'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  StyleSheet,
  Dimensions,
  ListView,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import Camera from 'react-native-camera';

var Game = require('./game.ios');
var Notes = require('./notes.ios');
var Load = require('./load.ios');

class Notate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'load'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>

      <Icon.TabBarItem
      selected={this.state.selectedTab === 'game'}
      iconName="crown"
      title='Game'
      onPress={() => {
        this.setState({
          selectedTab: 'game'
        });
      }}>
      <Game />
      </Icon.TabBarItem>

      <Icon.TabBarItem
      selected={this.state.selectedTab === 'load'}
      iconName="upload"
      title="Upload"
      onPress={() => {
        this.setState({
          selectedTab: 'load'
        });
      }}>
      <Load />
      </Icon.TabBarItem>

      <Icon.TabBarItem
      selected={this.state.selectedTab === 'notes'}
      iconName="list-bullet"
      title="Notations"
      onPress={() => {
        this.setState({
          selectedTab: 'notes'
        });
      }}>
      <Notes />
      </Icon.TabBarItem>

      </TabBarIOS>
    )
  }
}

AppRegistry.registerComponent('Notate', () => Notate);
