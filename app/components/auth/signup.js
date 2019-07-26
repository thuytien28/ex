import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';

export default class SignUp extends React.PureComponent {
    state = {
        username: '',
        password: '',
    };

    onChangeUsername = text => {
        this.setState({
            username: text
        });
    };

    onChangePassword = text => {
        this.setState({
            password: text
        });
    };

    onPressLogin = () => {
    };

    onPressSignUp = () => {
    };

    renderButtons() {
        if (this.props.auth.loading) {
            return <ActivityIndicator />
        } else {
            return (
                <View>
                    <Button textButton='Login' onPress={this.onPressLogin} />
                    <Button textButton='Signup' onPress={this.onPressSignUp} />
                </View>
            )
        }
    };

    render() {
        const { username, password } = this.state
        return (
            <View style={styles.container}>
                <Title title="Instagram" />
                <Input
                    placeholder="email@gmail.com"
                    onChange={this.onChangeUser}
                    value={username} />
                <Input
                    placeholder="password"
                    secureTextEntry
                    onChange={this.onChangePassword}
                    value={password}
                />
                <Button textButton='Sign Up' onPress={this.onPressSignUp} />
                <TouchableOpacity>
                    <View>
                        <Text>
                            {'Already got an account, take me back!'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// const mapStateToProps = state => ({
//     auth: state.auth
// });

// export default connect(
//     mapStateToProps,
//     { loginUser }
// )(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});