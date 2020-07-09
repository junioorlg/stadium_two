import React, { Component } from 'react';
import './social.scss';

class Social extends Component {

    render() {
        return (
            <div className="social-component">
                <ul>
                    <li><a className="social-link" href="google.com">instagram</a></li>
                    <li><a className="social-link" href="google.com">twiter</a></li>
                    <li><a className="social-link" href="google.com">linkedin</a></li>
                    <li><a className="social-link" href="google.com">hola@stadium.com</a></li>
                    <li><a className="social-link" href="google.com"><u>SP</u> / EN</a></li>
                </ul>
            </div>
        );
    }
}

export default Social;