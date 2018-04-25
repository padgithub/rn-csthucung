import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export default class LoginScreen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
      
          <Text style={styles.loginText}>
            Profile Screen
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
});