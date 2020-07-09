import React, { Component } from 'react';
import './home.scss';
import Main from './../main/main'

class Home extends Component {

    componentWillMount(){
        document.body.classList.add("home-background");
    }

    componentWillUnmount(){
        document.body.classList.remove("home-background");
    }

    render() {
        return (
            <Main>
                <div className="container equipo">
                    <div className="row">
                        <div className="col m10 offset-m1 s12 valign-wrapper">
                            <p className="home-about">Somos una Agencia integral de comunicación con más de 20 años en el mercado local y regional. Brindamos soluciones de estrategia, creatividad, gestión de contenidos en medios para diversas industrias y referentes de opinión.<br /><br />Innovación constante en nuestras ejecuciones traen como resultado efectividad y negocios que convalidan año tras año nuestro vínculo con los clientes.</p>
                        </div>
                    </div>

                    <div className="page-subtitle-container">
                        <h6 className="page-subtitle">CONTACTO</h6>
                    </div>
                </div>
            </Main>
        );
    }
}

export default Home;