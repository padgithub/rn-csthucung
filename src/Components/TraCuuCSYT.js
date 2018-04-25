import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TraCuuCSYT from './ViewDrawer/viewTCCSYT.js';

const TCCSYTDrawerItem = StackNavigator({
  Playground: { screen: TraCuuCSYT }
  },
  {
    headerMode: 'none'
  }
);

TCCSYTDrawerItem.navigationOptions = {
  drawerLabel: 'Tra Cứu CSYT',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="local-hospital"
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

export default TCCSYTDrawerItem;
