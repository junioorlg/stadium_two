import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'

import './eventos.scss'

import {data} from './data';

function Eventos ( props ) {

    var title = 'Producción \n y Eventos'
    var paragraph = 'Somos un productora especializada en generar contenido audiovisual en todos sus aspectos. Películas, programas de TV, documentales, y programas de radio. Desarrollamos eventos deportivos , comerciales e internacionales. Nos encargamos de la producción e implementación audiovisual campañas de comunicación, gestion de prensa, RRSS, la cobertura en vivo y streaming.'

    return (
        <Main>
            <div className="container container-eventos">
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

export default Eventos;
