import React, { Component } from 'react';
import './home.scss';
import Main from './../main/main'

class Home extends Component {

  render() {
    return (
        <Main>
            <div className="container">
                <p className="home-title">Somos una Agencia integral de comunicación con más de 20 años en el mercado local y regional. Brindamos solucion es de estrategia, creatividad, gestión de contenidos en medios para diversas industrias y referentes de opinión.
                    
                Innovación constante en nuestras ejecuciones traen como resultado efectividad y negocios que convalidan año tras año nuestro vínculo con los clientes.</p>

                <div className="center-align">
                    <h6 className="home-link">CONTACTO</h6>
                </div>
            </div>
        </Main>
    );
  }
}

export default Home;