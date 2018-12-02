import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from 'reactstrap';


class Header extends Component {
    
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
                console.log(firebaseUser.displayName);
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
        return(
            <header>
                <div id="change">
                    <a href="#/"><img id ="logo" src={require("../images/LogoDraftOne.png")} alt="Logo"/></a>    
                    {this.state.user ?
                    <div>
                        <span>Welcome {this.state.user.displayName}!</span>
                        <Button className="button" color="danger" onClick={() => firebase.auth().signOut() } id="SignUpButton">Log Out</Button>
                    </div>
                    :
                    <div>
                        <Button className="button" color="success" onClick={() => this.props.set("signUp")} id="SignUpButton">Sign Up</Button>
                        <Button outline color="success" onClick={() => this.props.set("signIn")} id="SignUpButton">Sign In</Button>
                    </div>
                    }
                </div>
            </header>
        )
    }
}

export default Header;