
import React from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default Title = props => (

    <Text style={styles.text}>
        {props.title}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        fontSize: 20,
        margin: 30
    }
});