import React, { Component } from 'react';
import './home.scss';
import Main from './../main/main'

class Home extends Component {

    render() {
        return (
            <Main>
                <div className="container equipo">
                    <div className="row">
                        <div className="col m10 offset-m1 s12 valign-wrapper">
                            <p>HOME</p>
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

export default Home;