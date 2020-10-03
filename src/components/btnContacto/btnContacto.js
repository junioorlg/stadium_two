import React, { Component } from 'react';
import './btnContacto.scss';

import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next'; //Languages

class BtnContacto extends Component {

    render() {
        return (
            <div className="btn-contacto-component">
                <div className="row">
                    <div className="col s12 center-btn">
                        <Link to="/contacto">{ this.props.t('COMPONENTE_BTN_CONTACTO_TEXT_1') }</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(BtnContacto);