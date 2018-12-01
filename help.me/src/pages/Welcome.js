import React, { Component } from 'react';
import Header from '../components/Header';
import SplashScreen from '../components/SplashScreen';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';


class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            signIn: false,
            signUp: false
        }
    }

    updateState = (type) => {
        console.log(type);
        this.setState({
            [type]: true
        });
    }

    render() {
        return(
            <React.Fragment>
                {this.state.signIn && <Redirect to="/signin" />}
                {this.state.signUp && <Redirect to="/signup" />}
                <Header set={this.updateState}></Header>
                <SplashScreen></SplashScreen>
                <Footer></Footer>
            </React.Fragment>
        )
    }

}

export default Welcome;


