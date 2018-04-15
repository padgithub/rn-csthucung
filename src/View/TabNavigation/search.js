import Expo from 'expo';
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import { Icon,SearchBar } from 'react-native-elements';

import SearchHome from './TabView/search_home';
import SearchDetails from './TabView/search_details';

const SearchTabView = ({ navigation }) => (
  <SearchHome navigation={navigation} />
);

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
  onCancel: () => console.log("cancel"),
  onClearText: () => console.log("cleared"),
  onChangeText: text => console.log("text:", text),
}

const SearchDetailTabView = ({ navigation }) => (
  <SearchDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const SearchTab = StackNavigator({
  Search: {
    screen: SearchTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      //title: 'Input'
      headerRight: (
        <SearchBar placeholder="Nhập chửa hàng cần tìm" platform="android" {...dummySearchBarProps} />
      ),
    }),

  },
  Search_Detail: {
    screen: SearchDetailTabView,
    path: '/search_details',
    navigationOptions: {
      title: 'Search Detail',
    },
  },
});

export default SearchTab;
