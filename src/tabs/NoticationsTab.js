import React, { Component } from 'react';
import { Container, Header, Content, List,Icon, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CardNotifi from '../views/CardNotification'
export default class ListAvatarExample extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="notifications" style={{ color: tintColor }} />
        )
    }
    render() {
    return (
        
      <Container>
        <Header>
        <Body><Text style={{ fontSize: 20 }}>Thông Báo</Text></Body>
        </Header>
        <Content>
          <List>
            <CardNotifi name = "Kulala" comment = "ahihi con bo" time = "8:33 pm" date = "To day"/>
            <CardNotifi name = "Malana" comment = "ahihi con bo" time = "7:59 pm" date = "To day"/>
            <CardNotifi name = "Seobu" comment = "ahihi con bo" time = "6:15 pm" date = "To day"/>
            <CardNotifi name = "Cannana" comment = "hay lam ban oi" time = "5:43 pm" date = "To day"/>
            <CardNotifi name = "Kaka" comment = "mua o dau vay" time = "4:12 pm" date = "To day"/>
          </List>
        </Content>
      </Container>
    );
  }
}