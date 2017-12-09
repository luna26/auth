import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDqpSVEgX2dMwNpZamfFGxLzyaVNF-hAIw',
            authDomain: 'auth-d52b4.firebaseapp.com',
            databaseURL: 'https://auth-d52b4.firebaseio.com',
            projectId: 'auth-d52b4',
            storageBucket: 'auth-d52b4.appspot.com',
            messagingSenderId: '220275908268'
        });
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;