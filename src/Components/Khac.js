import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Khac from './ViewDrawer/viewKhac.js';

const KhacDrawerItem = StackNavigator({
  Playground: { screen: Khac }
  },
  {
    headerMode: 'float'
  }
);

KhacDrawerItem.navigationOptions = {
  drawerLabel: 'Khác',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="local-florist"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
  title: 'Của Hàng Yêu Thích',
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        type="entypo"
        style={{ paddingLeft: 10 }}
        onPress={() => navigation.navigate('DrawerOpen')}
      />
    ),
};

export default KhacDrawerItem;
