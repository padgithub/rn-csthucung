import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CartsHome from './TabView/carts_home.js';
import CartsDetails from './TabView/carts_detail';

const CartsTabView = ({ navigation }) => (
  <CartsHome banner="Carts" navigation={navigation} />
);

const CartsDetailTabView = ({ navigation }) => (
  <CartsDetails banner="Carts Detail" navigation={navigation} />
);

const CartsTab = StackNavigator({
  Home: {
    screen: CartsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Giỏ Hàng',
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
  Detail: {
    screen: CartsDetailTabView,
    path: 'carts_detail',
    navigationOptions: {
      title: 'Carts Detail',
    },
  },
});

export default CartsTab;
