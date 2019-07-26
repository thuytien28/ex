import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Button extends React.PureComponent {
    render() {
        const { onPress, textButton } = this.props
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}
            >
                <View>
                    <Text
                        style={styles.text}
                    >
                        {textButton}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})