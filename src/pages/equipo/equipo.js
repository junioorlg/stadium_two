import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Main from '../main/main'
import './equipo.scss';
import BtnContacto from './../../components/btnContacto/btnContacto'

//Languages
import { withTranslation } from 'react-i18next'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

class Equipo extends Component {

    componentWillMount(){
        document.body.classList.add("equipo-background");
    }

    componentWillUnmount(){
        document.body.classList.remove("equipo-background");
    }

    render() {
    
        return (
            <Main>
                <div className="container equipo">
                    <div className="row">
                        <div className="col m10 offset-m1 s12 valign-wrapper">
                            <p className="equipo-about">{ this.props.t('EQUIPO_TEXT_1') }</p>
                        </div>
                    </div>

                    <div className="page-contacto">
                        <BtnContacto />
                    </div>

                    <BtnLanguage />
                </div>
            </Main>
        );
    }
}

export default withTranslation()(Equipo);;