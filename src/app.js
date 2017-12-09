import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDqpSVEgX2dMwNpZamfFGxLzyaVNF-hAIw',
            authDomain: 'auth-d52b4.firebaseapp.com',
            databaseURL: 'https://auth-d52b4.firebaseio.com',
            projectId: 'auth-d52b4',
            storageBucket: 'auth-d52b4.appspot.com',
            messagingSenderId: '220275908268'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        const { spinnerContent } = styles;
        switch(this.state.loggedIn){
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out!</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <View style={spinnerContent}><Spinner size='large' /></View>
        }   
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

const styles={
    spinnerContent:{
        justifyContent: 'center',
        flex:1
    }
}

export default App;