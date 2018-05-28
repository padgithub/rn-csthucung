import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions,AppRegistry,Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from "./src/login.js";
import DrawNavi from "./src/DrawNavi";

const Main = StackNavigator(
  {
    Logins: {
      path: '/login',
      screen: Login,
    },
      DrawNavis: {
      path: '/drawnavi',
      screen: DrawNavi,
    }
  },
  {
    initialRouteName: 'Logins',
    navigationOptions: {
      header: null
    }
  },
);

export default class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }

}

