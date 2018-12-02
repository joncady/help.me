import React, { Component } from 'react';
import Chat from './Chat';

class ChatArea extends Component {

    render () {
        let chats = this.props.chats;
        return (
            chats.map((c, i) => {
                console.log(c.side);
                return <Chat key={"chat" + i} side={c.side} text={c.text}></Chat>
            })
        );
    }

}

export default ChatArea;