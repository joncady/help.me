import React, { Component } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
// import {ApiAiClient} from "api-ai-javascript";

// const client = new ApiAiClient({accessToken: 'dc2685c9a24d479daf2478328f392eb7'});


class ChatPage extends Component {
    
    // componentDidMount() {
    //     client.textRequest('Hello')
    //     .then((response) => { console.log(response)})
    //     .catch((error) => {/* do something here too */})
    // }
    


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