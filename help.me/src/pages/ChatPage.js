import React, { Component } from 'react';
import { Jumbotron, Button, Input, InputGroup } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

class ChatPage extends Component {

    render() {
        return (
            <React.Fragment>
            <header>
                <div id="change">
                    <a href="/"><img id ="logo" src={require("../images/LogoDraftOne.png")} alt="Logo"/></a>    
                    <div>
                        <Button color="success" onClick={() => this.props.set("signUp")}>Back To Home</Button>
                    </div>
                </div>
            </header>
            <main>
                <InputGroup>
                    <Input placeholder="Enter your message here..." />
                </InputGroup>
                <Button color="success">SEND</Button>
            </main>
            </React.Fragment>
        )
    }

}

export default ChatPage;