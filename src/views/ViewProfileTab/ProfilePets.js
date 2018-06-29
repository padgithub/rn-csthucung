import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, StatusBar
} from 'react-native';
import { Button } from 'react-native-elements'
import { Font } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        text={title}
        textStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={selected ? { backgroundColor: 'rgba(213, 100, 140, 1)', borderRadius: 100, width: 127 } : { borderWidth: 1, borderColor: 'white', borderRadius: 30, width: 127, backgroundColor: 'transparent' }}
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}

export default class LoginScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../../assets/fonts/Georgia.ttf'),
      'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
      'bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
        />
        { this.state.fontLoaded ?
          <View style={{flex: 1, backgroundColor: '#F4F5ED'}}>
            <View style={styles.statusBar} />
            {/* <View style={styles.navBar}>
              <Text style={styles.nameHeader}>
                Misa - Profile
              </Text>
            </View> */}
            <ScrollView style={{flex: 1}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  //source={{ uri: 'https://static.pexels.com/photos/428336/pexels-photo-428336.jpeg' }}
                  source={require('../../images/alasca6.jpg')}
                  style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 10}}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 26, color: 'black', fontFamily: 'bold'}}>
                  Misa
                </Text>
                <Text style={{flex: 0.5, fontSize: 15, color: 'gray', textAlign: 'left', marginTop: 5}}>
                  22
                </Text>
                <Text style={{flex: 1, fontSize: 26, color: 'green', fontFamily: 'bold', textAlign: 'right'}}>
                  Alasca
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
                <Text style={{flex: 1, fontSize: 15, color: 'black', fontFamily: 'regular'}}>
                Thuộc sự quản lý của Yêu Pét Mỗi Ngày
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 30}}>
                <Text style={{flex: 1, fontSize: 15, color: 'rgba(216, 121, 112, 1)', fontFamily: 'regular', marginLeft: 40}}>
                  Sở Thích
                </Text>
                <View style={{flex: 1, width: SCREEN_WIDTH, marginTop: 20}}>
                  <ScrollView
                    style={{flex: 1}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    {/* thong tin can nang tinh trang cap nhat */}
                  </ScrollView>
                </View>
              </View>
              <View style={{flex: 1, marginTop: 30}}>
                <Text style={{flex: 1, fontSize: 15, color: 'rgba(216, 121, 112, 1)', fontFamily: 'regular', marginLeft: 40}}>
                  Thông Tin Chi Tiết
                </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Tuổi</Text>
                      <Text style={styles.infoTypeLabel}>Ngày nuôi</Text>
                      <Text style={styles.infoTypeLabel}>Màu lông</Text>
                      <Text style={styles.infoTypeLabel}>Màu mắt</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Text style={styles.infoAnswerLabel}>9</Text>
                      <Text style={styles.infoAnswerLabel}>25/2/2014</Text>
                      <Text style={styles.infoAnswerLabel}>Đen trắng</Text>
                      <Text style={styles.infoAnswerLabel}>Đen</Text>
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Kích thước</Text>
                      <Text style={styles.infoTypeLabel}>Cân nặng</Text>
                      {/* <Text style={styles.infoTypeLabel}>Smoke</Text>
                      <Text style={styles.infoTypeLabel}>Drink</Text>
                      <Text style={styles.infoTypeLabel}>Drugs</Text> */}
                    </View>
                    <View style={{flex: 1, marginLeft: 10, marginRight: -20}}>
                      <Text style={styles.infoAnswerLabel}>Fit</Text>
                      <Text style={styles.infoAnswerLabel}>Vegan</Text>
                      {/* <Text style={styles.infoAnswerLabel}>No</Text>
                      <Text style={styles.infoAnswerLabel}>No</Text>
                      <Text style={styles.infoAnswerLabel}>Never</Text> */}
                    </View>
                  </View>
                </View>
              </View>
              <Button
                ViewComponent={require('expo').LinearGradient}
                containerStyle={{ marginVertical: 20 }}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                buttonStyle={{ height: 55, width: SCREEN_WIDTH - 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                linearGradientProps = {{
                  colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                text="Cập Nhật Thông Tin"
                textStyle={{ fontFamily: 'regular', fontSize: 20, color: 'white', textAlign: 'center' }}
                onPress={() => console.log('Message Theresa')}
                activeOpacity={0.5}
              />
            </ScrollView>
          </View> :
          <Text>Loading...</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center'
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'regular',
    paddingBottom: 10,
  }
});
