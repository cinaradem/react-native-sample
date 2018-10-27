import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Spinner} from '../common';
import {emailChanged, loginUser, passwordChanged} from '../../actions';

class LoginForm extends Component {
    state = {email: '', password: '', loading: false};

    clickLogin() {
        this.setState({loading: true});
        const {email, password} = this.props;
        this.props.loginUser({email, password});

    }

    loginSucces() {
        this.setState({loading: false});
    }

    loginFail() {
        this.setState({loading: false});

    }

    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.clickLogin.bind(this)}> Giriş Yap</Button>
        }
        return <Spinner size="small"/>
    }

    render() {
        console.log(this.props.email);
        console.log(this.props.password);
        const {inputStyle} = styles;
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Card>
                    <CardSection>
                        <TextInput
                            placeholder="E-mail"
                            style={inputStyle}
                            value={this.props.email}
                            onChangeText={email => this.props.emailChanged(email)}
                        />
                    </CardSection>
                    <CardSection>
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            style={inputStyle}
                            value={this.props.password}
                            onChangeText={password => this.props.passwordChanged(password)}
                        />
                    </CardSection>
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        flex: 1
    }
}

const mapStateToProps = ({kimlikdogrulamaResponse}) => {
    const {email, password, loading} = kimlikdogrulamaResponse;
    return {email:'a@a.com', password:'123456', loading};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);