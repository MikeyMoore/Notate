'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	ListView,
	WebView,
	ScrollView,
	View,
	Text,
	CameraRoll
} from 'react-native';

var styles = StyleSheet.create({
	description: {
		fontSize: 20,
		textAlign: 'center',
		color: "#FFFFFF"
	},
	container: {
		flex: 1,
		 justifyContent: 'center',
		 alignItems: 'center',
		 backgroundColor: '#1496BB'
	},
	webview: {
		marginTop: 20,
		textAlign: 'center',
		fontSize: 20,
		alignItems: 'center'
	},
	 largeButton: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 30,
    padding: 20,
    width: 250,
    backgroundColor: '#c9d7e8',
    color: '#0D3D56',
    fontWeight: 'bold',
    borderRadius: 9
  }
});

class Load extends Component {
	render() {
		return (
			// <WebView
				// style={styles.webview}
				// source={{uri: 'http://172.16.50.140:3000/sync_files/list'}}
				// // source={{uri: 'https://github.com/facebook/react-native'}}
			// />
			<View style={styles.container}>
				<Text style={styles.largeButton} onPress={this.chooseFiles.bind(this)}>Choose Files</Text>
				<Text style={styles.largeButton} onPress={this.uploadFiles.bind(this)}>Upload Files</Text>
				<Text style={styles.largeButton} onPress={this.seeNotations.bind(this)}>See Notations</Text>
			</View>
		);
	}
	chooseFiles() {

	}
	uploadFiles() {

	}
	seeNotations() {

	}
}

module.exports = Load;