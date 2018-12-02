import React, { Component } from 'react';
import ChatArea from '../components/ChatArea'
import { Button, Input, InputGroup } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import { ApiAiClient } from "api-ai-javascript";

const client = new ApiAiClient({ accessToken: 'b1e67f91c61c4c2cbc3c75e8ec6ecc90' });


class ChatPage extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            input: ''
        }
    }

    sendMessage = () => {
        let myMessage = {
            text: this.state.input,
            side: "right"
        }
        let chats = this.state.messages;
        chats.push(myMessage);
        this.setState({
            messages: chats,
            input: ''
        })
        client.textRequest(this.state.input)
            .then((response) => {
                let chats = this.state.messages;
                let responseText = response.result.fulfillment.speech;
                let message = {
                    text: responseText,
                    side: "left"
                };
                chats.push(message);
                this.setState({
                    messages: chats
                });
                window.scrollTo(0,document.body.scrollHeight);
             })
            .catch((error) => { console.log(error.message) })
    }

    render() {
        console.log(this.state.messages);
        return (
            <React.Fragment>
                <style>{'body { background-color: #171717; }'}</style>
                <header style={{ backgroundColor: 'white', position: 'fixed', width: '100%'}}>
                    <div id="change">
                        <a href="/"><img id="logo" src={require("../images/LogoDraftOne.png")} alt="Logo" /></a>
                        <div>
                            <Button color="success" onClick={() => window.location.hash = "#/"}>Back To Home</Button>
                        </div>
                    </div>
                </header>
                <section style={{ paddingBottom: "100px", paddingTop: "120px"}}>
                    <div>
                        <ChatArea chats={this.state.messages}></ChatArea>
                    </div>
                </section>
                <main>
                    <div style={{ position: 'fixed', bottom: '0px', width: '100%', backgroundColor: 'gray', paddingBottom: '30px', paddingTop: '30px'}}>
                        <div style={{ display: 'flex', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <InputGroup>
                                <Input onChange={(event) => this.setState({ input: event.target.value })} value={this.state.input} placeholder="Enter your message here..." />
                            </InputGroup>
                            <Button onClick={this.sendMessage} color="success">SEND</Button>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }

}

export default ChatPage;