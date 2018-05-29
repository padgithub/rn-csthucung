import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HoiDap from './ViewDrawer/viewHoiDap.js';

const HoiDapDrawerItem = StackNavigator({
  Playground: { screen: HoiDap }
  },
  {
    headerMode: 'none'
  }
);

HoiDapDrawerItem.navigationOptions = {
  drawerLabel: 'Hỏi Đáp',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="email"
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

export default HoiDapDrawerItem;
