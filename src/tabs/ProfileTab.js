import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Profiles from '../views/ViewProfileTab/VProfiles'
import EditsProfile from '../views/ViewProfileTab/VEditProfile'
import SettingProfile from '../views/ViewProfileTab/VSettings'
import ProfilePet from '../views/ViewProfileTab/ProfilePets'

const VProfiles = ({ navigation }) => (
  <Profiles navigation={navigation} />
);
const VEditsProfile = ({ navigation }) => (
  <EditsProfile navigation={navigation} />
);
const VSettingProfile = ({ navigation }) => (
  <SettingProfile navigation={navigation} />
);
const VProfilePet = ({ navigation }) => (
  <ProfilePet navigation={navigation} />
);

const HomeProfiles = StackNavigator({
  Profile: {
    screen: Profiles,
    path: '/vprofiles',
    navigationOptions: ({ navigation }) => ({
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
    screen: VEditsProfile,
    path: '/veditprofile',
    navigationOptions: {
      title: 'Edits Profile',
    },
  },
  SettingProfile: {
    screen: VSettingProfile,
    path: '/vsetting',
    navigationOptions: {
      title: 'Setting',
    },
  },
  ProfilePets: {
    screen: VProfilePet,
    path: '/profilsepet',
    navigationOptions: {
      title: 'Pets Profile',
    },
  },
});

export default HomeProfiles;