import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

// CSS
import './esports.scss'

import {data} from './data';

function Esports ( props ) {

    var title = 'ESPORT_TITLE_1'
    var paragraph = 'ESPORT_TEXT_1'

    return (
        <Main>
            <div className="container container-esport">
                <div className="container-flex-esport">
                    <div className="page-text">
                        
                        <div className="title-ebro">
                            <img src="/media/gallery/esport/ebro.png" title="strategy stadium" alt="strategy stadium" className="responsive-img" />
                            <h1>
                                eBRO
                                <br />
                                Gaming
                            </h1>
                        </div>

                        <Internal title={title} paragraph={paragraph} />
                    </div>
                        
                    <div className="page-gallery">
                        <Gallery data={data} toShow='1' />
                    </div>
                </div>
                    
                <div className="page-contacto">
                    <BtnContacto />
                </div>

                <BtnLanguage />
            </div>
        </Main>
    );
}

export default Esports;
