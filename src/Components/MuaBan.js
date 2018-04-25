import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MuaBan from './ViewDrawer/viewMuaBan.js';

const MuaBanDrawerItem = StackNavigator({
  Playground: { screen: MuaBan }
  },
  {
    headerMode: 'none'
  }
);

MuaBanDrawerItem.navigationOptions = {
  drawerLabel: 'Mua Bán',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="shopping-basket"
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

export default MuaBanDrawerItem;
