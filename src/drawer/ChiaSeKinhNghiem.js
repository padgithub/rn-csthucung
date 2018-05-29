import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ChiaSeKinhNghiem from './ViewDrawer/viewChiaSekinhNghieem.js';

const CSKNDrawerItem = StackNavigator({
  Playground: { screen: ChiaSeKinhNghiem }
  },
  {
    headerMode: 'none'
  }
);

CSKNDrawerItem.navigationOptions = {
  drawerLabel: 'Chia Sẽ Kinh Nghiệm',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="pageview"
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

export default CSKNDrawerItem;
