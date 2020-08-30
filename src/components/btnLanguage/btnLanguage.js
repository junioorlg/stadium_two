import React from 'react';
import './btnLanguage.scss';
import { useTranslation } from 'react-i18next'

function BtnLanguage ( props ) {

    const { i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <div className="container-btnlanguage">
            <div className="row">
                <div className="col m12 center-align">
                    <a className="lang-selector" href="# " onClick={()=>handleClick('en')}>EN</a> / 
                    <a className="lang-selector" href="# " onClick={()=>handleClick('es')}> ES</a>
                </div>
            </div>
        </div>
    );
    
}

export default BtnLanguage;