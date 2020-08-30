import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

import './medios.scss'

import {data} from './data';

function Medios ( props ) {

    var title = 'MEDIOS_TITLE_1'
    var paragraph = 'MEDIOS_TEXT_1'

    return (
        <Main>
            <div className="container container-medios">
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

export default Medios;
