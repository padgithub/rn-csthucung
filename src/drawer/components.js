import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HomesTab from '../tabs/HomeTab';
import SearchTab from '../tabs/SearchTab';
import NoticationTab  from '../tabs/NoticationsTab'
import ProfileTab from '../tabs/ProfileTab'
import Shop from '../tabs/Shops'

const Components = TabNavigator(
  {
    HomesTabs: {
      screen: HomesTab,
      path: '/hometab',
      navigationOptions: {
        tabBarLabel: 'New feed',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'home' : 'home'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    SearchTabs: {
      screen: SearchTab,
      path: '/seachtab',
      navigationOptions: {
        header: 'none',
        tabBarLabel: 'Tìm kiếm',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="search" size={30} type="font-awesome" color={tintColor} />
        ),
      },
    },
    ShopTabs: {
      screen: Shop,
      path: '/shops',
      navigationOptions: {
        tabBarLabel: 'Pets Shop',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'baidu' : 'baidu'}
            size={30}
            type="entypo"
            color={tintColor}
          />
        ),
      },
    },
    NoticationTabs: {
      screen: NoticationTab,
      path: '/noticationtab',
      navigationOptions: {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'notification' : 'notification'}
            size={30}
            type="entypo"
            color={tintColor}
          />
        ),
      },
    },
    ProfileTabs: {
      screen: ProfileTab,
      path: '/profiletab',
      navigationOptions: {
        tabBarLabel: 'User',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'user' : 'user'}
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomesTabs',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  }
);

Components.navigationOptions = {
  drawerLabel: 'Trang Chủ',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default Components;
