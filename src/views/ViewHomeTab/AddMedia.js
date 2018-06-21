
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'


class AddMedia extends Component {

    static navigationOptions = {
        title: 'Edits Profile'  
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>add media</Text>
            </View>
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