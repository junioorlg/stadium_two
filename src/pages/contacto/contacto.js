import React from 'react'
import Main from './../main/main'
import emailjs from 'emailjs-com'
import './contacto.scss'
import { useTranslation } from 'react-i18next'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

import M from 'materialize-css';

function Contacto ( props ) {

    const { t } = useTranslation();

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', e.target, 'user_2BwfI4UY5qeGSpG7jkPPg')
        .then((result) => {
            console.log(result.text);
            M.toast({html: t('CONTACTO_MESSAGE_SENT')})
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
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
                    <div className="col m5 offset-m1 s12">
                        <div className="col s12">
                            <p className="contacto-paragraph"><strong>Buenos Aires</strong></p>
                            <p className="contacto-paragraph">Sucre 632, 3er Piso</p>
                            <p className="contacto-paragraph">CABA, Argentina</p>
                            <br />
                            <br />
                        </div>
                        <div className="col s12">
                            <p className="contacto-paragraph"><strong>info@stadiumglobal.com</strong></p>
                            <p className="contacto-paragraph">+54 11 4787 8700</p>
                            <br />
                            <br />
                        </div>
                        <div className="col s12">
                            <p className="contacto-paragraph"><strong>Miami - Madrid - Buenos Aires</strong></p>
                        </div>
                    </div>
                    <div className="col m6 s12">
                       <form onSubmit={sendEmail}>
                           <div className="input-field form-group">
                               <input className="form-control" type="text" name="nombre" required="required"/>
                               <label htmlFor="nombre">{t('Nombre')} *</label>
                           </div>

                           <div className="input-field form-group">
                                <input className="form-control" type="email" name="email" required="required" />
                                <label htmlFor="email">{t('Mail')} *</label>
                           </div>

                            <div className="input-field form-group">
                                <textarea name="mensaje" className="materialize-textarea" required="required"></textarea>
                                <label htmlFor="mensaje">{t('Mensaje')} *</label>
                            </div>

                            <div className="col m12 contacto-btn-submitter">
                                <button className="btn-flat contacto-link-enviar" type="submit">{t('ENVIAR')}</button>
                            </div>                            
                       </form>
                   </div>
                </div>

                <BtnLanguage />

           </div>
        </Main>
    );
}

export default Contacto;
