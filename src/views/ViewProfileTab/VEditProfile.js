
import React, { Component } from "react";
import {
    StyleSheet
} from "react-native";

import { Container, Header, Content, Form, Item, Input, Label, DatePicker,Text, Footer,Button } from 'native-base';

class LikesTab extends Component {

    static navigationOptions = {
        title: 'Edits Profile'  
    }

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

    render() {
        return (
        <Container>
            <Content>
                  <Form>
                  <Item stackedLabel>
                    <Label>Tên</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel>
                    <Label>Ngày sinh</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel>
                    <Label>Địa chỉ</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel>
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel>
                    <Label>Số điện thoại</Label>
                    <Input />
                  </Item>
                </Form>
                <Footer>
                <Button block success>
            <Text>Success</Text>
          </Button>
                </Footer>
            </Content>
            
      </Container>
        );
    }
}

export default LikesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});