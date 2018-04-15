import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Lists from './ViewNavigation/lists;

const ListsDrawerItem = StackNavigator({
  Playground: { screen: Lists }
},
  {
    headerMode: 'none'
  }
);

ListsDrawerItem.navigationOptions = {
  drawerLabel: 'Quản Lý Quán',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="insert-chart"
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

export default ListsDrawerItem;
