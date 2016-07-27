'use strict';

import React, { Component } from 'react';

import {
  AlertIOS,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  Text,
  CameraRoll
} from 'react-native';
import Camera from 'react-native-camera';


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
     backgroundColor: '#123456'
  }
});


class Game extends Component {
  sendReview(){
    AlertIOS.alert(
      'Make sure you first take a picture of the board at the starting position.  Make sure white is on the right!',
      '',
      [
        {text:'gotcha', onPress: ()=> console.log('okiedokie!')}
      ]
    )
  }
  render() {
    {this.sendReview()}
    return (
      <View style={styles.container}>
        <Text style={styles.blankText}> </Text>
        <Camera
          style={styles.preview}
          style={{width: Dimensions.get('window').width, height: Dimensions.get('window').width}}
          aspect={Camera.constants.Aspect.fill}
          orientation={Camera.constants.Orientation.portrait}
          type={Camera.constants.Type.back}
          flashMode={Camera.constants.FlashMode.on} 
          captureMode={Camera.constants.CaptureMode.still}
          captureTarget={Camera.constants.CaptureTarget.disk}
          ref={(cam) => {
            this.camera = cam;
          }}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}></Text>
        </Camera>
        <Text style={styles.endGame} onPress={this.endGame.bind(this)}>[END GAME]</Text>
      </View>
    );
  }
  takePicture() {
    this.camera.capture(function(err, data) {
      this.setState({photo: data});
      console.log(err, data);
      console.log('just took a picture');
    })
      .then( (data) => console.log(data) )
      // .then(fetch('http://172.16.50.140:3000/sync_files/list/', {
      .then(fetch('http://localhost:3000/polls/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageData: (data) => console.log(data)})
      }))
      .catch(err => console.error(err));
  }  

  // takePicture() {
  //    var that = this
  //    fetch("https://tiptap-api.herokuapp.com/tippees", {
  //      method: "POST",
  //      headers: {
  //      'Accept': 'application/json',
  //      'Content-Type': 'application/json'
  //    }, body: JSON.stringify({tippee: that.state})})
  //    .then((response) => response.json())
  //    .then(that.navigate("main"))
  //    .done();
  //  }


  endGame() {
    var that = this;
    // fetch("http://172.16.50.140:3000/sync_files", {method: "GET"})
    fetch("http://localhost:3000/polls", {method: "GET"})
    .then((response) => response.json())
    // .then((responseData) => {
    //   that.setState({firstName: responseData[0].first_name})
    //   that.setState({lastName: responseData[0].last_name})
    //   that.setState({paymentUrl: responseData[0].payment_url})
    //   that.setState({photoUrl: responseData[0].photo_url})
    // .done();
    // }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  blankText: {
    margin: 50
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  capture: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    // margin: 130,
    // padding: 80,
    fontSize: 24,
    opacity: .09
  },
  endGame: {
    flex: 0,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 40,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 9
  }
});

module.exports = Game;