import React from 'react'
import Main from './../main/main'
import './eventos.scss'

function Eventos(props){

    var title = 'Producción y Eventos';
    var subtitle = 'CONTACTO';

    return(
        <Main>
            <div className="container">
               
                <div className="row">
                    <div className="col m8 offset-m4">
                        <p className='eventos-paragraph first'>Somos una productora especializada en generar contenido audiovisual en todos sus aspectos. Desde <span className='highlight'>películas, programas de TV y documentales</span> hasta programas de <span className='highlight'>radio</span>.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col l4 m6">
                        <p className='page-title'>{title}</p>
                    </div>

                    <div className="col l5 m6">
                        <p className='eventos-paragraph second'>Ofrecemos todos los servicios para el desarrollo de eventos, ya sean deportivos, comerciales y /o institucionales: producción e implementación audiovisual, campaña de comunicación, gestión de prensa, RRPP, cobertura en vivo y streaming.</p>
                    </div>
                </div>

                <div className="page-subtitle-container">
                    <h6 className="page-subtitle">{subtitle}</h6>
                </div>
            </div>
        </Main>
    )
}

export default Eventos