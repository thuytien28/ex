import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';

export default class Input extends React.PureComponent {
    render() {
        const { value, placeholder, onChange, secureTextEntry } = this.props;
        return (
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#dfe6e9',
        borderColor: '#b2bec3',
        borderWidth: 1,
        margin: 10,
        padding: 10
    }
});