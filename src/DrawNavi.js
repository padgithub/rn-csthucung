import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions,AppRegistry,Text } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import MainScreen from "./Components/MainScreen";
import TraCuuCSYT from "./Components/TraCuuCSYT";
import KhoeAnh from "./Components/KhoeAnh";
import ChiaSeKinhNghiem from "./Components/ChiaSeKinhNghiem";
import HoiDap from "./Components/HoiDap";
import MuaBan from "./Components/MuaBan";
import Khac from "./Components/Khac"

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('../assets/logo.png')}
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
    MainScreen: {
      path: '/mainscreen',
      screen: MainScreen,
    },
      TraCuuCSYT: {
      path: '/tracuucsyt',
      screen: TraCuuCSYT
    },
    KhoeAnh: {
      path: '/khoeanh',
      screen: KhoeAnh
    },
    ChiaSeKinhNghiem: {
      path: '/chiasekinhnghiem',
      screen: ChiaSeKinhNghiem
    },
    
    HoiDap: {
      path: '/hoidap',
      screen: HoiDap,
    },
    MuaBan: {
      path: '/muaban',
      screen: MuaBan,
    },
    Khac: {
      path: '/khac',
      screen: Khac,
    }
  },
  {
    initialRouteName: 'MainScreen',
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

export default class App extends React.Component {
  render() {
    return (
      <MainRoot />
    );
  }

}

