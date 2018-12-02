import React, { Component } from 'react';

class ChatArea extends Component {

    constructor() {
        super();
    }

    render() {
        let text = this.props.text;
        
        return (
            <div style={{ textAlign: this.props.side, padding: '20px' }}>
                <p className={this.props.side}>{text}</p>
            </div>
        );

    }

}

export default ChatArea;