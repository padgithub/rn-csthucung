import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Container, Header,Item, Input, Title, Content, Button, Icon, Right, Body, Left, Picker,Form } from 'native-base'

class SearchTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: 'key0'
        };
      }

      onValueChange(value: string) {
        this.setState({
          selected: value
        });
    }

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
              <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Bài Viết" value="key0" />
              <Picker.Item label="Giống thú cưng" value="key1" />
              <Picker.Item label="Cơ sỡ thú y" value="key2" />
            </Picker>
          </Form>
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