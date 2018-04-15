import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Pricing from './ViewNavigation/pricing';

const PricingDrawerItem = StackNavigator({
  Pricing: {
    screen: Pricing,
    navigationOptions: ({ navigation }) => ({
      title: 'Information App',
      headerLeft: (
        <Icon
          name="info"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
});

PricingDrawerItem.navigationOptions = {
  drawerLabel: 'Information App',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
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

export default PricingDrawerItem;
