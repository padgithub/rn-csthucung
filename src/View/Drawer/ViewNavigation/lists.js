import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ListsScreen1 from './lists/infoshop';
import ListsScreen2 from './lists/addmon';
import ListsScreen3 from './lists/listorder';
import ListsScreen4 from './lists/listorderacces';

export default class Lists extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0.993}
        >
          <ListsScreen1 />
          <ListsScreen2 />
          <ListsScreen3 />
          <ListsScreen4 />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
});
