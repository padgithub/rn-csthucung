import Expo from 'expo';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profilesss from './ProfileTab/ProfileTab'
import ProfileSetting from 'ProfileTab/ProfileSetting.js'
import EditProfile from 'ProfileTab/EditProfile.js'

const ProfilesTabView = ({ navigation }) => (
  <Profilesss navigation={navigation} />
);

const ProfileSettingTabView = ({ navigation }) => (
  <ProfileSetting navigation={navigation} />
);

const EditProfileTabView = ({ navigation }) => (
  <EditProfile navigation={navigation} />
);

const ProfilesTab = StackNavigator({
  Profiles: {
    screen: ProfilesTabView,
    path: '/',
  },
  ProfileSetting: {
    screen: ProfileSettingTabView,
    path: 'setting',
    navigationOptions: ({ navigation }) => ({
      title: 'SetTing',
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
  EditProfile: {
    screen: EditProfileTabView,
    path: 'edit',
    navigationOptions: ({ navigation }) => ({
      title: 'SetTing',
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
});

export default ProfilesTab;
