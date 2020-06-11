import React, { Component } from 'react';
import './social.scss';

class Social extends Component {

    render() {
        return (
            <div className="social-component">
                <ul>
                    <li><a className="social-link">instagram</a></li>
                    <li><a className="social-link">twiter</a></li>
                    <li><a className="social-link">linkedin</a></li>
                    <li><a className="social-link">hola@stadium.com</a></li>
                </ul>
            </div>
        );
    }
}

export default Social;