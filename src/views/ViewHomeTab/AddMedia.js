
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { ImagePicker } from 'expo';
import { Icon,Container,Content,Left,Right,Body,Item,Form,Picker,Button,Label,Input,Textarea } from 'native-base'

class AddMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          image: null,
        };
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }

      _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    render() {
        let { image } = this.state;
        return (
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Tiêu đề</Label>
                        <Input />
                        </Item>
                        <Item>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Button block light style = {{backgroundColor : "#007aff"}} onPress={this._pickImage}>
                        <Text>Choose Ảnh</Text>
                        </Button>
                        {image &&
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                        </View>
                        </Item>
                    </Form>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                placeholder="Chọn danh mục bài viết"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Khác" value="key0" />
                                <Picker.Item label="Khoe ảnh" value="key1" />
                                <Picker.Item label="Hỏi đáp" value="key2" />
                                <Picker.Item label="Chia sẽ kinh nghiệm" value="key3" />
                                <Picker.Item label="Mua bán" value="key4" />
                            </Picker>
                        </Item>
                            <Textarea rowSpan={5} bordered placeholder="Nội dung" />
                    </Form>
                    
                    <Button block light style = {{backgroundColor : "#007aff"}}>
                        <Text>OK</Text>
                    </Button>
                </Content>
        );
    }
}

export default AddMedia;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});