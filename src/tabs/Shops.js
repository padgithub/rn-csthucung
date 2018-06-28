import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Shops from '../views/ViewShopsTab/ShopsHome';
//import HomesDetails from '../views/ViewHomeTab/homes_detail';

const ShopsTabView = ({ navigation }) => (
  <Search navigation={navigation} />
);

// const HomesDetailTabView = ({ navigation }) => (
//   <HomesDetails
//     banner={`${navigation.state.params.name}s Profile`}
//     navigation={navigation}
//   />
// );

const ShopsTab = StackNavigator({
  SearchsHome: {
    screen: Shops,
    path: '/',
  },
});

export default ShopsTab;