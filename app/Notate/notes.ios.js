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
		 backgroundColor: '#1496BB'
	},
	webview: {
		marginTop: 20,
		alignItems: 'center'
	},
	notations: {
		color: 'white',
		fontWeight: 'bold'
	}

});

class Notes extends Component {
	render() {
		return (
		//	<WebView 
		//	 style={styles.webview}
		//	 source={{uri: 'http://localhost:8000/sync_files'}}
		//	 // source={{uri: 'https://github.com/facebook/react-native'}}
		//	/>

			 <View style={styles.container}>
			 	<Text style={styles.notations}>1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bh6 9. Qh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 ed4 15. Rd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4 Ka7 21. Rhe1 d4 22. Nd5 Nbd5 23. ed5 Qd6 24. Rd4 cd4 25. Re7 Kb6 26. Qd4 Ka5 27. b4 Ka4 28. Qc3 Qd5 29. Ra7 Bb7 30. Rb7 Qc4 31. Qf6 Ka3 32. Qa6 Kb4 33. c3 Kc3 34. Qa1 Kd2 35. Qb2 Kd1 36. Bf1 Rd2 37. Rd7 Rd7 38. Bc4 bc4 39. Qh8 Rd3 40. Qa8 c3 41. Qa4 Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7</Text>
			 </View>
		);
	}
}

module.exports = Notes;