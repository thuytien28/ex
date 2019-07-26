import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { startApp } from './navigation';

export default class InitScreen extends React.PureComponent {
    async componentDidMount() {
        try {
            startApp();
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{'Loading'}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
