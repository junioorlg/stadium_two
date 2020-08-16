import React, { Component } from 'react';
import Main from '../main/main'
import './page404.scss';
//Languages
import { withTranslation } from 'react-i18next'

class Page404 extends Component {

    render() {
        return (
            <Main>
                
                <div className="container container-page404">
                    <div className="notfoundpage">
                        <div className="notfound">
                            <div className="notfound-404">
                                <h3>{ this.props.t('PAGE404_TEXT_1') }</h3>
                                <h1><span>4</span><span>0</span><span>4</span></h1>
                            </div>
                            <h2>{ this.props.t('PAGE404_TEXT_2') }</h2>
                        </div>
                    </div>
                </div>
    
            </Main>
        );
    }
}

export default withTranslation()(Page404);