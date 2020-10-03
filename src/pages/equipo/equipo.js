import React, { useEffect } from 'react';

// CSS
import './equipo.scss';

// Components
import Main from '../main/main'
import BtnContacto from './../../components/btnContacto/btnContacto'

//Languages
import { withTranslation, useTranslation } from 'react-i18next'
import BtnLanguage from './../../components/btnLanguage/btnLanguage'

const Equipo = () => {

    const { t } = useTranslation();

    useEffect(() => {
        document.body.classList.add("equipo-background");

        return () => {
            document.body.classList.remove("equipo-background");
        }
    })

    return (
        <Main>
            <div className="container equipo">
                <div className="row">
                    <div className="col m10 offset-m1 s12 valign-wrapper">
                        <div>
                            <p className="equipo-about">{ t('EQUIPO_TEXT_1') }</p>
                            <br />
                            <p className="equipo-about">{ t('EQUIPO_TEXT_2') }</p>
                        </div>
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

export default withTranslation()(Equipo);