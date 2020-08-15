import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'

import './entretenimientos.scss'

import {data} from './data';

function Entretenimientos ( props ) {

    var title = 'Entretenimiento'
    var paragraph = 'Nos especializamos en la ejecución de acciones en social media y contenido con influencers en todas las plataformas. Nuestro equipo de marketing le da un especio a talentos nuevos o conocidos para que saquen provecho de los espacios audiovisuales e interactuen con el público. Desarrollamos y administramos contenidos, generadno fuentes de exposición para que moneticen su potencial.'

    return (
        <Main>
            <div className="container container-entretenimientos">
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

export default Entretenimientos;
