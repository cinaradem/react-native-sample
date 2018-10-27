import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from './types';
import {Alert} from "react-native";
import firebase from "firebase";
import {Actions} from 'react-native-router-flux';

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        })
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        })
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});
        if (email === '' || password === '') {
            Alert.alert(
                'Mesaj',
                'Her iki alanada dolu olmalı!',
                [
                    {text: 'Tamam', onPress: () => null}
                ]
            );
        }
        else {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => loginSuccess(dispatch, user))
                .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => loginSuccess(dispatch, user))
                        .catch((ex) => {
                            console.log(ex);
                            return loginFail(dispatch);
                        });
                });
        }
    }
}
const loginFail = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Kullanıcı bilgileri hatalı',
        [
            {text: 'Tamam', onPress: () => null}
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};
const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.studentList({type: 'reset'});
};