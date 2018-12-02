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
                <div className="contained">
                    <img style={{ width: '100%' }} src={require("../images/Cover.png")}></img>    
                        {this.state.user ? 
                            <div style={{ textAlign: 'center' }}>
                                <Button outline color="success" onClick={() => window.location.hash="/chat"}>START CHATTING</Button>
                            </div>
                            :
                            <div style={{ textAlign: 'center' }}>
                                <Button outline color="success" onClick={() => window.location.hash="/signin"}>Sign In</Button>
                            </div>
                        }        
                </div>   
            </main>
        )
    }
}

export default SplashScreen;