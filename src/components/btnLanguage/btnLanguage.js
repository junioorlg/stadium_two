import React, { Component } from 'react';
import './btnLanguage.scss';
import { useTranslation } from 'react-i18next'

function BtnLanguage ( props ) {

    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <div class="container-btnlanguage">
            <div className="row">
                <div className="col m12 center-align">
                    <a className="lang-selector" onClick={()=>handleClick('en')}>EN</a> / <a className="lang-selector" onClick={()=>handleClick('es')}>ES</a>
                </div>
            </div>
        </div>
    );
    
}

export default BtnLanguage;