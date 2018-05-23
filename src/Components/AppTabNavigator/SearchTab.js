import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon,Container,Header,Item,Input,Button } from 'native-base'

class SearchTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
          <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
              </Item>
              <Button transparent>
              <Icon name="ios-search" />
              </Button>
            </Header>
          </Container>
        );
      }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});