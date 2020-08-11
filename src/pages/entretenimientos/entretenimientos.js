import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'

import './entretenimientos.scss'

import {data} from './data';

function Entretenimientos ( props ) {

    var title = 'Entretenimiento'
    var paragraph = 'Generamos contenido para todas las plataformas. Nos especializamos en la ejecución de acciones en social media y contenidos con inﬂuencers. Nuestro equipo de marketing suma un nuevo espacio dándole oportunidades a nuevos talentos y a talentos ya conocidos, para que aprovechen las plataformas audiovisuales que el entorno digital ofrece para interactuar con el público consumidor. Desarrollamos la comunicación y administración de contenidos digitales generando una nueva fuente de exposición para que los talentos moneticen su potencial de impacto.'

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
