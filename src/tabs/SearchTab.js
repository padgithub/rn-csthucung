import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Search from '../views/ViewSearchTab/VSearchs';
//import HomesDetails from '../views/ViewHomeTab/homes_detail';

const SearchTabView = ({ navigation }) => (
  <Search navigation={navigation} />
);

// const HomesDetailTabView = ({ navigation }) => (
//   <HomesDetails
//     banner={`${navigation.state.params.name}s Profile`}
//     navigation={navigation}
//   />
// );

const SearchTab = StackNavigator({
  SearchsHome: {
    screen: Search,
    path: '/',
  },
});

export default SearchTab;