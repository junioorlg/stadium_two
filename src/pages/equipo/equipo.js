import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Main from '../main/main'

import './equipo.scss';

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
                            <p className="equipo-about">Somos una Agencia integral de comunicación con más de 20 años en el mercado local y regional. Brindamos soluciones de estrategia, creatividad, gestión de contenidos en medios para diversas industrias y referentes de opinión.<br /><br />Innovación constante en nuestras ejecuciones traen como resultado efectividad y negocios que convalidan año tras año nuestro vínculo con los clientes.</p>
                        </div>
                    </div>

                    <div className="page-subtitle-container">
                        <Link  to="/contacto" className="page-subtitle">CONTACTO</Link>
                    </div>
                </div>
            </Main>
        );
    }
}

export default Equipo;