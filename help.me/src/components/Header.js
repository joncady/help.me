import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Header extends Component {

    render() {
        return(
            <header>
                <div id="change">
                    <img id ="logo" src={require("../images/LogoDraftOne.png")}/>    
                    <div>
                        <Button className="button" color="success" id="SignUpButton">Sign Up</Button>
                        <Button outline color="success" id="SignUpButton">Sign In</Button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;