import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'
import Internal from './../../components/internal/internal'
import BtnContacto from './../../components/btnContacto/btnContacto'

import './estrategias.scss'

function Estrategias ( props ) {

    var title = 'Research \n y estrategia'
    var paragraph = 'Estrategia y ejecución orientados a procesos electorales, y gestión de organismos. Nuestra metodología se contruye así:'

    return (
        <Main>
            <div className="container container-estrategias">

                <div className="row">
                    <div className="col s12 m6">
                        <h1>                        
                            {title.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                            })}
                        </h1>
                        <p>{paragraph}</p>
                        <ul className="menu-estrategias">
                            <li>1.ESCUCHAR / Encuestas Digitales</li>
                            <li>2.DESARROLLAR / Estrategia y Planificación</li>
                            <li>3.COMUNICAR / Producción de Contenidos</li>
                            <li>4.AMPLIFICAR / Pauta Oficial</li>
                            <li>5.INFORMAR / Pauta Informativa</li>
                            <li>6.FIDELIZAR / Territorio</li>
                            <li>7.EVOLUCIONAR / Monitoreo y Control</li>
                        </ul>
                    </div>
                    <div className="col s12 m6">
                        <img src="./media/gallery/estrategias/bc.png" class="responsive-img" />
                    </div>
                </div>
                    
                <div className="page-contacto">
                    <BtnContacto />
                </div>
            </div>
        </Main>
    );
}

export default Estrategias;
