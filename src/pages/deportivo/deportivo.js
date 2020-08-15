import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'

import './deportivo.scss'

import {data} from './data';

function Deportivo ( props ) {

    var title = 'Marketing \n Deportivo'
    var paragraph = 'Desarrollo e implementación de estrategias integrales en la industria del deporte. Ofrecemos servicios de consultoría general para marcas, jugadores, instituciones y sponsors. Desde estrategia de comunicación 360, producción de eventos y activaciones de marcas comerciales hasta el manejo de carreras deportivas.'

    return (
        <Main>
            <div className="container container-deportivo">
                <div className="page-text">
                    <Internal title={title} paragraph={paragraph} />
                </div>
                    
                <div className="page-gallery">
                    <Gallery data={data} title={title} />
                </div>
                    
                <div className="page-contacto">
                    <BtnContacto />
                </div>
            </div>
        </Main>
    );
}

export default Deportivo;
