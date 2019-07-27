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
import * as actions from '../../actions/AuthActions';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';

import { createUser } from '../../actions/AuthActions';

class SignUp extends React.PureComponent {
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
        const { componentId } = this.props;
        Navigation.push(componentId, {
            component: {
                name: 'Login',
                passProps: {
                },
            },
        });
    };

    onPressSignUp = () => {
        const { username, password } = this.state;
        this.props.createUser(username, password)

        // .then((result) => {
        //     console.warn(result);
        // })
    };

    renderButtons() {
        if (this.props.auth.loading) {
            return <ActivityIndicator />
        } else {
            return (
                <View>
                    <Button textButton='Sign Up' onPress={this.onPressSignUp} />
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
                    onChange={this.onChangeUsername}
                    value={username} />
                <Input
                    placeholder="password"
                    secureTextEntry
                    onChange={this.onChangePassword}
                    value={password}
                />
                {this.renderButtons()}
                <TouchableOpacity
                    onPress={this.onPressLogin}
                >
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

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { createUser }
)(SignUp);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});