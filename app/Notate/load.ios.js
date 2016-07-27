'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	ListView,
	WebView,
	ScrollView,
	View,
	Text,
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
		 backgroundColor: '#234123'
	}
});

class Load extends Component {
	render() {
		return (
			<WebView
				// source={{uri: 'http://172.16.50.140:3000/sync_files/list'}}
				source={{uri: 'https://github.com/facebook/react-native'}}
				style={{marginTop: 20}}
			/>
		);
	}
}

module.exports = Load;