import React, { Component } from 'react';
import { Container, Header, Content, List,Icon, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Chó của bạn dễ thương quoá...</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Nhưng thua con của mình...</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} />
              </Left>
              <Body>
                <Text>Oader Lot</Text>
                <Text note>Chụp ở đâu vậy</Text>
              </Body>
              <Right>
                <Text note>3:45 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} />
              </Left>
              <Body>
                <Text>Adam Muiu</Text>
                <Text note>Ta thấy ta bắt thịt...</Text>
              </Body>
              <Right>
                <Text note>3:50 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}