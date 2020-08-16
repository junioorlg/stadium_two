import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

import './deportivo.scss'

import {data} from './data';

function Deportivo ( props ) {

    var title = 'DEPORTE_TITLE_1'
    var paragraph = 'DEPORTE_TEXT_1'

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

                <BtnLanguage />
            </div>
        </Main>
    );
}

export default Deportivo;
