import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'
import { useTranslation } from 'react-i18next'

import './medios.scss'

import {data} from './data';

function Medios ( props ) {

    const { t } = useTranslation();

    var title = 'Gestión \n de Medios'
    var paragraph = 'Nos especializamos en la compra de medios y la producción de soluciones e ideas integrales aplicables en social media. Desarrollamos el diseño, la edición y la estrategia de comunicación de tus proyectos. Optimizamos e implementamos las campañas de marketing con influencers para generar mayor impacto mediático.'

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
