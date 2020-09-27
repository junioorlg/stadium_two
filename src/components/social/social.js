import React from 'react';
import './social.scss';
import { useTranslation } from 'react-i18next'

function Social ( props ) {

    const { i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <div className="social-component">
            <ul>
                <li>
                    <a className="social-link" href="https://www.instagram.com/stadiumglobal/" target="_blank" rel="noopener noreferrer">
                        instagram
                    </a>
                </li>

                <li>
                    <a className="social-link" href="https://www.linkedin.com/company/stadium-global/" target="_blank" rel="noopener noreferrer">
                        linkedin
                    </a>
                </li>
                
                <li>
                    <span className="social-link lang-selector" onClick={()=>handleClick('en')}>EN</span>&nbsp;<span className="social-link">/</span>&nbsp;
                    <span className="social-link lang-selector" onClick={()=>handleClick('es')}>ES</span>
                </li>
            </ul>
        </div>
    );
}

export default Social;