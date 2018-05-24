import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {

    render() {

        const images = {

            "1": require('../images/alasca1.jpg'),
            "2": require('../images/alasca2.jpg'),
            "3": require('../images/alasca3.jpg'),
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../assets/me.jpg')} />
                        <Body>
                            <Text style={{ 
                                fontWeight: "900",
                                fontSize: 15
                                }}>Nunu Na Na </Text>
                            <Text note>Jan 15, 2018</Text>
                            <Text note>vừa xong</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>
                    </Left>
                    <Right>
                    <Button transparent>
                            <Icon name="ios-bookmark-outline" style={{color: 'black'}}/>
                        </Button>
                        </Right>
                </CardItem>

                <CardItem style={{ height: 10 }}>
                    <Text style={{color: 'black'}} >{this.props.likes} likes</Text>
                    <Text style={{color: 'black'}} >{this.props.comments} comments </Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>varun </Text>
                            ahihi, Do ngoc
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});