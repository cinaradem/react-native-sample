import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Liste from './src/components/Liste';
import LoginForm from './src/components/login/LoginForm';
import {Button, CardSection, Header, Spinner} from './src/components/common';
import reducers from './src/reducers/index';
import Router from './src/router';
import configureStore from './src/configureStore';
// const store = configureStore;

const Store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

type Props = {};
export default class App extends Component<Props> {
    state = {loggedIn: null};


    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA0ahKWjx8DWDsR7X-olxSC-b8YlJnAFUw",
            authDomain: "testreactnative-f2024.firebaseapp.com",
            databaseURL: "https://testreactnative-f2024.firebaseio.com",
            projectId: "testreactnative-f2024",
            storageBucket: "testreactnative-f2024.appspot.com",
            messagingSenderId: "928787154044"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    clickLogout() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={this.clickLogout.bind(this)}> Çıkış</Button>
                    </CardSection>
                );
            case false:
                return (
                    <LoginForm/>
                );
            default:
                return (
                    <View>
                        <Spinner size="large"/>
                    </View>
                );
        }
    }

    render() {
        return (
            <Provider store={Store}>
                {/*<View style={{flex: 1}}>*/}
                    {/*<Header headerText={'Örnek Proje'}/>*/}
                    {/*{this.renderContent()}*/}
                    {/*<Liste/>*/}
                {/*</View>*/}
                <Router/>
            </Provider>
        );
    }
}

 