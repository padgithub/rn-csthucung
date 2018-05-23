import React from 'react';

import { StackNavigator, SwitchNavigator } from 'react-navigation';
import VHomes from "./ViewHomeTab/VHomes";
import VHomeDetail from "./ViewHomeTab/VHomeDetail"

const HomeStack = StackNavigator({ Homes: VHomes, HomeDetail: VHomeDetail});


export default SwitchNavigator(
  {
    AuthLoading: HomeStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);