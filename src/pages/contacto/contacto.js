import React from 'react'
import Main from './../main/main'
import './contacto.scss'
import { useTranslation } from 'react-i18next'

function Contacto ( props ) {

    const { t, i18n } = useTranslation();

    function handleClick(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <Main>
           <div className="container contacto">

                <div className="row">
                    <div className="col m12">
                        <p className="contacto-title">{t('Contacto')}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col m6 s12">
                        <div className="col m12 s6">
                            <p className="contacto-paragraph"><strong>Buenos Aires</strong></p>
                            <p className="contacto-paragraph">Sucre 632, 3er Piso</p>
                            <p className="contacto-paragraph">CABA, Argentina</p>
                            <br />
                        </div>
                        <div className="col m12 s6">
                            <p className="contacto-paragraph"><strong>Sao Paulo</strong></p>
                            <p className="contacto-paragraph">Rua Butanta 510</p>
                            <p className="contacto-paragraph">Pinheiros, Sao Paulo, Brasil</p>
                            <br />
                        </div>
                        <div className="col m12 s12">
                            <p className="contacto-paragraph"><strong>info@stadiumglobal.com</strong></p>
                            <p className="contacto-paragraph">+54 11 4787 8700</p>
                            <br />
                        </div>
                    </div>
                    <div className="col m6 s12">
                       <form>
                           <div className="input-field form-group">
                               <input className="form-control" type="text" name="nombre" />
                               <label htmlFor="nombre">{t('Nombre')}</label>
                           </div>

                           <div className="input-field form-group">
                                <input className="form-control" type="email" name="email" required="required" />
                                <label htmlFor="email">{t('Mail')} *</label>
                           </div>

                            <div className="input-field form-group">
                                <textarea name="mensaje" className="materialize-textarea"></textarea>
                                <label htmlFor="mensaje">{t('Mensaje')}</label>
                            </div>

                            <div className="col m12 contacto-btn-submitter">
                                <button className="btn-flat contacto-link-enviar" type="submit">{t('ENVIAR')}</button>
                            </div>                            
                       </form>
                   </div>
                </div>

                <div className="row">
                   <div className="col m12 center-align">
                        <a className="lang-selector" onClick={()=>handleClick('en')}>EN</a> / <a className="lang-selector" onClick={()=>handleClick('es')}>ES</a>
                   </div>
                </div>

           </div>
        </Main>
    );
}

export default Contacto;
