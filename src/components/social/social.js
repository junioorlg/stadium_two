import React, { Component } from 'react';
import './social.scss';
import { useTranslation } from 'react-i18next'

function Social ( props ) {

    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <div className="social-component">
            <ul>
                <li><a className="social-link" href="google.com">instagram</a></li>
                <li><a className="social-link" href="google.com">twiter</a></li>
                <li><a className="social-link" href="google.com">linkedin</a></li>
                <li>
                    <a className="social-link lang-selector" href="#" onClick={()=>handleClick('en')}>EN</a> / &nbsp;
                     <a className="social-link lang-selector" href="#" onClick={()=>handleClick('es')}>ES</a>
                </li>
            </ul>
        </div>
    );
}

export default Social;