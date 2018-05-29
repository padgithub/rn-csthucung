import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Components from './src/drawer/components';
import Logins from './src/drawer/login';
import TraCuuCSTY from './src/drawer/TraCuuCSYT'
import KhoeAnh from './src/drawer/KhoeAnh'
import HoiDap from './src/drawer/HoiDap'
import ChiaSeKinhNghiem from './src/drawer/ChiaSeKinhNghiem'
import MuaBan from './src/drawer/MuaBan'
import Khac from './src/drawer/Khac'
const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./src/images/logo1.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{marginLeft: 10}}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const MainRoot = DrawerNavigator(
  {
    Component: {
      path: '/components',
      screen: Components,
    },
    TraCuuCSTY: {
      path: '/login',
      screen: TraCuuCSTY
    },
    KhoeAnh: {
      path: '/login',
      screen: KhoeAnh
    },
    HoiDap: {
      path: '/login',
      screen: HoiDap
    },
    ChiaSeKinhNghiem: {
      path: '/login',
      screen: ChiaSeKinhNghiem
    },
    MuaBan: {
      path: '/muaban',
      screen: MuaBan
    },
    Khac: {
      path: 'khac',
      screen: Khac
    },
    Login: {
      screen: Logins
    }
  },
  {
    initialRouteName: 'Component',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

Expo.registerRootComponent(MainRoot);
