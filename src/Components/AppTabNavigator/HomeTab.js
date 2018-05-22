import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // Version can be specified in package.json
import VHomes from "./ViewHomeTab/VHomes";
import VHomeDetail from "./ViewHomeTab/VHomeDetail"

const HomeStack = StackNavigator({ Homes: VHomes, HomeDetail: VHomeDetail});


export default SwitchNavigator(
  {
    AuthLoading: HomeStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);