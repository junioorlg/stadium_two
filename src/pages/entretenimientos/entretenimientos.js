import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'
import SocialEntretenimiento from './../../components/socialEntretenimiento/socialEntretenimiento';

import './entretenimientos.scss'

import {data} from './data';

function Entretenimientos ( props ) {

    var title = 'ENTRETENIMIENTO_TITLE_1'
    var paragraph = 'ENTRETENIMIENTO_TEXT_1'

    return (
        <Main>
            <div className="container container-entretenimientos">
                <div className="page-text">
                    <Internal title={title} paragraph={paragraph} isEntretenimiento={ true } />
                </div>
                    
                <div className="page-gallery">
                    <Gallery data={data} title={title} />
                </div>

                <SocialEntretenimiento from='entretenimiento' />
                    
                <div className="page-contacto">
                    <BtnContacto />
                </div>

                <BtnLanguage />
            </div>
        </Main>
    );
}

export default Entretenimientos;
