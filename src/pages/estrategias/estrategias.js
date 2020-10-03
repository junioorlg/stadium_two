import React from 'react'
import Main from '../main/main'

import BtnContacto from './../../components/btnContacto/btnContacto'
import { useTranslation } from 'react-i18next'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

import './estrategias.scss'

function Estrategias ( props ) {

    const { t } = useTranslation();

    var title = t('ESTRATEGIA_TITLE_1')
    var paragraph = t('ESTRATEGIA_TEXT_1')

    return (
        <Main>
            <div className="container container-estrategias">

                <div className="row">
                    <div className="col s12 m6">
                        <h1>                        
                            {title.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                            })}
                        </h1>
                        <p>{paragraph}</p>
                        <ul className="menu-estrategias">
                            <li>{ t('ESTRATEGIA_ITEM_1') }</li>
                            <li>{ t('ESTRATEGIA_ITEM_2') }</li>
                            <li>{ t('ESTRATEGIA_ITEM_3') }</li>
                            <li>{ t('ESTRATEGIA_ITEM_4') }</li>
                            <li>{ t('ESTRATEGIA_ITEM_5') }</li>
                            <li>{ t('ESTRATEGIA_ITEM_6') }</li>
                            <li>{ t('ESTRATEGIA_ITEM_7') }</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <img src="/media/gallery/estrategias/strategy.png" title="strategy stadium" alt="strategy stadium" className="responsive-img" />
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

export default Estrategias;
