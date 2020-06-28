import React from 'react'
import Main from './../main/main'
import './deportivo.scss'
import deportivoImg1 from '../../media/deportivo/img1.PNG'
import deportivoImg2 from '../../media/deportivo/img2.PNG'

function Deportivo ( props ) {
    
    var title = 'Marketing Deportivo'
    var subtitle = 'PROYECTO'
    var paragraph = 'Desarrollo e implementación de estrategias integrales en la industria del deporte. Ofrecemos servicios de consultoría general para marcas, jugadores, instituciones y sponsors. Desde estrategia de comunicación 360, producción de eventos y activaciones de marcas comerciales hasta el manejo de carreras deportivas.'

    return (
        <Main>
           <div className="container">

                <div className="row">
                    <div className="col s12 hide-on-med-and-up">
                        <h5 className='page-title'>{title}</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col m5 s6 offset-m2">
                        <img className='responsive-img' src={deportivoImg1} />
                    </div>
                    <div className="col m5 s6">
                        <img className='responsive-img' src={deportivoImg2} />
                    </div>
                </div>

                <div className="row">
                    <div className="col m2 offset-m4 hide-on-small-only">
                        <h5 className='page-title'>{title}</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col m4 hide-on-small-only">
                        <br/><br/><br/>
                        <h6 className='page-subtitle'>{subtitle}</h6>
                    </div>
                    <div className="col m8 s12">
                        <p className='deportivo-paragraph '>{paragraph}</p>
                    </div>
                </div>

                <div className="page-subtitle-container hide-on-med-and-up">
                    <h6 className="page-subtitle">{subtitle}</h6>
                </div>

           </div>
        </Main>
    );
}

export default Deportivo;
