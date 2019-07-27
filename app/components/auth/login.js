import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import { loginUser } from '../../actions/AuthActions';
import * as actions from '../../actions/AuthActions';

class Login extends React.PureComponent {
    static propTypes = {
        componentId: PropTypes.string.isRequired,
    }

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
        const { username, password } = this.state
        this.props.loginUser(username, password)
    };

    onPressSignUp = () => {
        const { componentId } = this.props;
        Navigation.push(componentId, {
            component: {
                name: 'SignUp',
                passProps: {
                },
            },
        });
    };

    renderButtons() {
        if (this.props.auth.loading) {
            return <ActivityIndicator />
        } else {
            return (
                <View>
                    <Button textButton='Sign In' onPress={this.onPressLogin} />
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
                    value={username}
                />
                <Input
                    placeholder="password"
                    secureTextEntry
                    onChange={this.onChangePassword}
                    value={password}
                />
                {this.renderButtons()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});