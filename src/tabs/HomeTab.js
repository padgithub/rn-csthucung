import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomesHome from '../views/ViewHomeTab/homes_home';
import HomesDetails from '../views/ViewHomeTab/homes_detail';
//import AddMedia from '../view/ViewHomeTab/AddMedia'

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
      title: 'Pets',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 15 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
      headerRight: (
        <Icon
          name="new-message"
          size={25}
          type="entypo"
          style={{ paddingRight: 15 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  Home_Detail: {
    screen: HomesDetailTabView,
    path: '/homes_detail',
    navigationOptions: {
      title: 'Bình luận',
    },
  },
});

export default HomesTab;