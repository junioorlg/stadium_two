import React from 'react'
import Main from './../main/main'
import './estrategias.scss'

function Estrategias(props){

    var title = 'Research y estrategia';
    var subtitle = 'CONTACTO';
    var paragraph = 'Estrategia y ejecución orientados a procesos electorales, y gestión de organismos. Nuestra Metodlogía se construye así:';

    return(
        <Main>
            <div className="container">
               
                <div className="row">
                    <div className="col m5">
                        <h3 className='page-title space-top'>{title}</h3>
                        <p className='estrategia-paragraph'>{paragraph}</p>
                    </div>
                    <div className="col m7">
                        <ul className="estrategia-menu-items">
                            <li><span className="change-color-helper">Escuchar</span> Encuestas Digitales</li>
                            <li><span className="change-color-helper">Desarrolla</span> Estrategia y Planificación</li>
                            <li><span className="change-color-helper">Comunicar</span> Producción de Contenidos Digitales</li>
                            <li><span className="change-color-helper">Amplificar</span> Pauta Oficial</li>
                            <li><span className="change-color-helper">Informar</span> Pauta Informativa</li>
                            <li><span className="change-color-helper">Fidelizar</span> Territorio</li>
                            <li><span className="change-color-helper">Evolucionar</span> Monitoreo y Control</li>
                        </ul>
                    </div>
                </div>

                <div className="page-subtitle-container">
                    <h6 className="page-subtitle">{subtitle}</h6>
                </div>
            </div>
        </Main>
    )
}

export default Estrategias