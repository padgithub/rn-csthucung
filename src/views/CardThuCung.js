import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Body, Left, Right, Button } from 'native-base'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class CardThuCung extends Component {
    
    render() {
        return (
            <Card>
                <CardItem bordered style={{ backgroundColor: '#E8D3E3', height: 40 }}>
                    <Left>
                        <Text style={{ 
                                fontWeight: "900",
                                fontSize: 15
                        }}>{this.props.petname}</Text>
                    </Left>
                    <Body />
                    <Right>
                        <Button
                            //onPress = {() =>  this.props.navigation.navigate('Main')}
                            transparent>
                            <SimpleLineIcons name="location-pin" style={{ color: 'black',width: 30 }} />
                        </Button>
                    </Right>
                </CardItem>
                <CardItem bordered>
                  <Left>
                      <Left>
                        <Text style={{ 
                                fontWeight: "600",
                                fontSize: 15
                          }}>Cân nặng: </Text><Text>  {this.props.cannang}</Text>
                        </Left>
                        <Right>
                    <Text style={{ 
                                fontWeight: "600",
                                fontSize: 15
                        }}> Update: </Text>
                        <Text>  {this.props.timeupdatecannang} </Text>
                  </Right>
                  </Left>
                </CardItem>
                <CardItem bordered>
                  <Left>
                      <Left>
                        <Text style={{ 
                                fontWeight: "600",
                                fontSize: 15
                          }}>Tình trạng sức khoẻ: </Text>
                          <Text>  {this.props.tinhtrang}</Text>
                        </Left>
                        <Right>
                    <Text style={{ 
                                fontWeight: "600",
                                fontSize: 15
                        }}> Update: </Text>
                        <Text>  {this.props.timeupdatetinhtrang}</Text>
                  </Right>
                  </Left>
                </CardItem>
              </Card>
        );
    }
}
export default CardThuCung;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});