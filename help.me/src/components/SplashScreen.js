import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

class SplashScreen extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.authUnregFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if(firebaseUser){
                console.log('logged in');
                this.setState({
                    user: firebaseUser
                })
            }
            else { //firebaseUser undefined: is not logged in
                console.log('logged out');
                this.setState({
                    user: null
                })
            }
        });
    }

    componentWillUnmount() {
       this.authUnregFunc();
    }

    render() {
        return (
            <main>
                <Jumbotron style={{ height: "350px", marginBottom: '1em' }}>
                    <h1 className="display-3">We're here for you.</h1>
                    <hr className="my-2" />
                    <p className="lead">Chat and get help right away.</p>               
                    {this.state.user ? 
                        <div style={{ textAlign: 'center' }}>
                            <Button outline color="success">START CHATTING</Button>
                        </div>
                        :
                        <div style={{ textAlign: 'center' }}>
                            <Button outline color="success">Sign In</Button>
                        </div>
                    }        
                </Jumbotron>
            </main>
        )
    }
}

export default SplashScreen;