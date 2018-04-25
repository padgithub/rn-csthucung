import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import KhoeAnh from './ViewDrawer/viewKhoeAnh.js';

const KhoeAnhDrawerItem = StackNavigator({
  Playground: { screen: KhoeAnh }
  },
  {
    headerMode: 'none'
  }
);

KhoeAnhDrawerItem.navigationOptions = {
  drawerLabel: 'Khoe Ảnh',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="face"
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

export default KhoeAnhDrawerItem;
