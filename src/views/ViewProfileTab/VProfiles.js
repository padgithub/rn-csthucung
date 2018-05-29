import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import { Container, Content, Header,Icon, Left, Body, Right, Segment, Button,Card,CardItem } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
var { height, width } = Dimensions.get('window');

import CardComponent from '../CardComponent'

var images = [
    require('../../images/alasca1.jpg'),
    require('../../images/alasca2.jpg'),
    require('../../images/alasca3.jpg'),
    require('../../images/alasca4.jpg'),
    require('../../images/alasca5.jpg'),
    require('../../images/alasca6.jpg'),
    require('../../images/alasca7.jpg')
]

class ProfileTab extends Component {

    static navigationOptions = {


        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        ),
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        },
        this.navigation
    }

    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

    }
    //image dog
    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })

    }

    //List bai viet
    renderSectionTwo() {

    }

    //List luu tru
    renderSectionThree() {

    }

    //infomation dog
    renderSectionFort() {
        return (
            <Card>
            <CardItem header bordered>
              <Text>My Luuu</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Can Nang
                </Text>
                <Text>
                  23
                </Text>
                <Text> Update: 9/5/2018 </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Text>
                  Tình trạng sức khoẻ
                </Text>
                <Text>
                  An Ngu Tot
                </Text>
                <Text> Update: 8/5/2018 </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        )
    }

    renderSection() {

        if (this.state.activeIndex == 0) {

            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {this.renderSectionOne()}
                </View>
            )

        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent names = "Anh Dũng" dates = "Jan 25 2018" times = "vừa xong" imageSource="1" likes="101" comments="123" newnamecomment = "Mmimi" newcomment = "ahihi. Đồ chó"/>
                    <CardComponent names = "Anh Dũng" dates = "Jan 25 2018" times = "1 phút trước" imageSource="2" likes="101" comments="123" newnamecomment = "Keu Mi" newcomment = "ahihi. Đồ heo"/>
                    <CardComponent names = "Anh Dũng" dates = "Jan 25 2018" times = "5 ngày trước" imageSource="3" likes="151" comments="523" newnamecomment = "Nan Ni" newcomment = "ahihi. Đồ lợn"/>
                </View>
            )
        }
        else if (this.state.activeIndex == 3) {
            return (
                <View>
                <Card>
                <CardItem header bordered>
                  <Text>My Luuu</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      Cân nặng: 23 kg
                    </Text>
                    <Text> Update: 9/5/2018 </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                  <Text>
                      Tình trạng sức khoẻ: An Ngu Tot
                    </Text>
                    <Text> Update: 8/5/2018 </Text>
                  </Body>
                </CardItem>
              </Card>
              
              <Card>
                <CardItem header bordered>
                  <Text>Anchi</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      Cân nặng: 13 kg
                    </Text>
                    <Text> Update: 10/5/2018 </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                  <Text>
                      Tình trạng sức khoẻ: Ăn nhiều mới bị ốm
                    </Text>
                    <Text> Update: 7/5/2018 </Text>
                  </Body>
                </CardItem>
              </Card>
              </View>
            )
        }
    }

    _showEditsProfile = () => {
        this.props.navigation.navigate('EditsProfile');
      };
      _showSettings = () => {
        this.props.navigation.navigate('SettingProfile');
      };

    componentDidMount() {
        console.log(width)
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ paddingLeft: 10, paddingLeft: 10 }}>
                    <Left>
                        <Icon name="md-person-add" />
                    </Left>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ fontSize: 32 }} />
                    </Right>
                </Header>

                <Content>

                    <View style={{ paddingTop: 10 }}>

                        {/** User Photo Stats**/}
                        <View style={{ flexDirection: 'row' }}>

                            {/**User photo takes 1/3rd of view horizontally **/}
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image source={require('../../../assets/me.jpg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />

                            </View>

                            {/**User Stats take 2/3rd of view horizontally **/}
                            <View style={{ flex: 3 }}>

                                {/** Stats **/}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-end'
                                    }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>20</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>205</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>167</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                                    </View>
                                </View>

                                {/**Edit profile and Settings Buttons **/}
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

                                    <View
                                        style={{ flexDirection: 'row' }}>

                                        {/** Edit profile takes up 3/4th **/}
                                        <Button 
                                            onPress={ this._showEditsProfile}
                                            bordered dark
                                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }} ><Text>Edit Profile</Text></Button>


                                        {/** Settings takes up  1/4th place **/}
                                        <Button 
                                            onPress={ this._showSettings}
                                            bordered dark style={{
                                            flex: 1,
                                            height: 30,
                                            marginRight: 10, marginLeft: 5,
                                            justifyContent: 'center'
                                        }}>
                                            <Icon name="settings" style={{ color: 'black' }}></Icon></Button>
                                    </View>
                                </View>{/**End edit profile**/}
                            </View>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Varun Nath</Text>
                                <Text>Lark | Computer Jock | Commercial Pilot</Text>
                            </View>
                        </View>


                    </View>


                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                            <Button

                                onPress={() => this.segmentClicked(0)}
                                transparent
                                active={this.state.activeIndex == 0}

                            >
                                <Icon name="ios-apps-outline"
                                    style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]} >
                                </Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(1)}
                                transparent active={this.state.activeIndex == 1}>
                                <Icon name="ios-list-outline" style={[{ fontSize: 32 }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(2)}
                                transparent active={this.state.activeIndex == 2}>
                                <Icon name="ios-bookmark-outline" style={this.state.activeIndex == 2 ? {} : { color: 'grey' }}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(3)}
                                transparent last active={this.state.activeIndex == 3}>
                                <MaterialIcons name="pets" style={[{ fontSize: 32 }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]}></MaterialIcons>
                            </Button>
                        </View>



                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                        {this.renderSection()}

                    </View>
                </Content>
            </Container >
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

{/**  // <FlatList
            //     horizontal={false}
            //     numColumns={3}
            //     data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }]}
            //     renderItem={({ item, index }) =>
            //         <View style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
            //             <Image style={{
            //                 flex: 1,
            //                 alignSelf: 'stretch',
            //                 width: undefined,
            //                 height: undefined,

            //             }}
            //                 source={images[index]}>
            //             </Image>

            //         </View>
            //     }//end render item
            // />
 **/}