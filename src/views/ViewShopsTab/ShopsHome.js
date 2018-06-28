import React, { Component } from "react";
import {
    Text,
    StyleSheet
} from "react-native";

import { Container, Content, Icon, Body} from 'native-base'

class ShopsTab extends Component {
    render() {
        return (
          <Container>
            <Content>
                <Body>
                    <Text>Coming soon</Text>
                </Body>
            </Content>
          </Container>
        );
      }
}
export default ShopsTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});