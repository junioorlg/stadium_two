import React from 'react'
import Main from './../main/main'
import './medios.scss'
import mediosImg1 from '../../media/medios/medios.PNG'

function Deportivo ( props ) {

    var title = 'Gestión de medios';
    var subtitle = 'CONTACTO';
    var paragraph = 'Somos una agencia integral de comunicación especializada en la compra de medios, producción de ideas, social media, diseño y edición, optimización e influencers.';
    
    return (
        <Main>
            <div className="container">

                <div className="row">

                    <div className="col m6 offset-m2 hide-on-med-and-up">
                        <img className='responsive-img' src={ mediosImg1 } atl="medios-img"/>   
                    </div>

                    <div className="col m4 s12">
                        <h3 className='page-title'>{title}</h3>
                        <p className='medios-paragraph'>{paragraph}</p>
                    </div>

                    <div className="col m6 offset-m2 hide-on-small-only">
                        <img className='responsive-img' src={ mediosImg1 } atl="medios-img"/>   
                    </div>
                </div>
                
                <div className="row hide-on-small-only">
                    <div className="col m3">
                        <h6 className='page-subtitle'>{subtitle}</h6>
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
