import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Thumbnail, Body, Left, Right, ListItem} from 'native-base'

export class CardNotification extends Component {
  render() {
    return (
        <ListItem avatar>
        <Left>
          <Thumbnail source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
        </Left>
        <Body>
          <Text>{this.props.name}</Text>
          <Text note>{this.props.comment}</Text>
        </Body>
        <Right>
          <Text note>{this.props.time}</Text>
          <Text note>{this.props.date}</Text>
        </Right>
      </ListItem>
    )
  }
}

export default CardNotification