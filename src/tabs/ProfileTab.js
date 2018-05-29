import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Profiles from '../views/ViewProfileTab/VProfiles'
import EditsProfile from '../views/ViewProfileTab/VEditProfile'
import SettingProfile from '../views/ViewProfileTab/VSettings'

const HomesTabView = ({ navigation }) => (
  <HomesHome navigation={navigation} />
);

const HomesDetailTabView = ({ navigation }) => (
  <HomesDetails
    banner={`${navigation.state.params.name}s adf`}
    navigation={navigation}
  />
);

const HomesTab = StackNavigator({
  Profile: {
    screen: Profiles,
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
  EditsProfile: {
    screen: EditsProfile,
    path: '/homes_detail',
    navigationOptions: {
      title: 'Homes Detail',
    },
  },
  SettingProfile: {
    screen: SettingProfile,
    path: '/homes_detail',
    navigationOptions: {
      title: 'Homes Detail',
    },
  },
});

export default HomesTab;