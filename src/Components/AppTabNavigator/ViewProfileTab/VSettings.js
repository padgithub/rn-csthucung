
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'


class LikesTab extends Component {

    static navigationOptions = {
        title: 'Setting',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>setting</Text>
            </View>
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