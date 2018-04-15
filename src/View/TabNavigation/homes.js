import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomesHome from './TabView/homes_home';
import HomesDetails from './TabView/homes_detail';

const HomesTabView = ({ navigation }) => (
  <HomesHome navigation={navigation} />
);

const HomesDetailTabView = ({ navigation }) => (
  <HomesDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const HomesTab = StackNavigator({
  Homes: {
    screen: HomesTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Cơm Hộp Online',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  Home_Detail: {
    screen: HomesDetailTabView,
    path: '/homes_detail',
    navigationOptions: {
      title: 'Homes Detail',
    },
  },
});

export default HomesTab;