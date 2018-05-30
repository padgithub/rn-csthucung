import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './src/login';
import DrawNavi from './src/DrawNavi';
//import AddMedia from '../view/ViewHomeTab/AddMedia'

const DraweNaviView = ({ navigation }) => (
  <DrawNavi navigation={navigation} />
);

const LoginView = ({ navigation }) => (
  <Login navigation={navigation}/>
);

const MainLy = StackNavigator({
  DrawNavis: {
    screen: DraweNaviView,
    path: '/drawnavi',
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
    },
    Logins: {
    screen: LoginView,
    path: '/login',
  },
},
{
  initialRouteName: 'DrawNavis',
});

export default class App extends React.Component {
  render() {
    return (
      <MainLy/>
    );
  }

}