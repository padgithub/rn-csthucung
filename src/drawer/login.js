import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../login';

const LoginDrawerItem = StackNavigator({
  Playground: { screen: Login }
  },
  {
    headerMode: 'none',
  }
);
LoginDrawerItem.navigationOptions = {
  drawerLabel: 'Đăng xuất',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="log-out"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="entypo"
      color={tintColor}
    />
  ),
  //drawerLockMode: 'locked-closed',
};

export default LoginDrawerItem;
