import React, { Component } from 'react';
import './btnContacto.scss';

import { Link } from "react-router-dom";

class BtnContacto extends Component {

    render() {
        return (
            <div className="btn-contacto-component">
                <div className="row">
                    <div className="col s12">
                        <Link to="/contacto">Contacto</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BtnContacto;