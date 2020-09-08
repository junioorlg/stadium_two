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
                    <span className="lang-selector" onClick={()=>handleClick('en')}>EN</span> / 
                    <span className="lang-selector" onClick={()=>handleClick('es')}> ES</span>
                </div>
            </div>
        </div>
    );
    
}

export default BtnLanguage;