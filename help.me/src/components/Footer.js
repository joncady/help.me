import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ padding: '1em' }}>
                    <p className="footer-text">PROJECT BY JONATHAN CADY, THOMAS THAT, JUSTIN BANUSING, JOHN KIM </p>
                </div>
                <div style={{ padding: '1em' }}>
                    <a href="/#">ABOUT</a> | <a href="/#">DOCUMENTATION</a> | <a href="/#">CONTACT US</a>
                </div>
            </footer>
        )
    }
}

export default Footer;