import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon } from 'react-native-elements';


class ButtonsDetail extends Component {
  render() {
    const { navigation } = this.props;

    return(
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../../assets/StoriesHeaderThumbnails/1.jpg')} />
              </Left>
              <Body>
                <Text>Pratik</Text>
                <Text note>Chó của bạn dễ thương quoá...</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../../assets/StoriesHeaderThumbnails/1.jpg')} />
              </Left>
              <Body>
                <Text>Pratik</Text>
                <Text note>Nhưng thua con của mình...</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} />
              </Left>
              <Body>
                <Text>Oader</Text>
                <Text note>Chụp ở đâu vậy</Text>
              </Body>
              <Right>
                <Text note>3:45 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../../../assets/StoriesHeaderThumbnails/3.jpg')} />
              </Left>
              <Body>
                <Text>Adam</Text>
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

export default ButtonsDetail;
