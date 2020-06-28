import React from 'react'
import Main from '../main/main'

import Gallery from './../../components/gallery/gallery'

import './entretenimientos.scss'

import imgVolver from '../../media/volver.png'
import entretenimientoImg1 from '../../media/entretenimiento/entretenimiento1.png'
import entretenimientoImg2 from '../../media/entretenimiento/entretenimiento2.png'

import {data} from './data';

function Entretenimientos ( props ) {

    var title = 'Entretenimiento'
    var subtitle = 'CONTACTO'
    var paragraph = 'Generamos contenido para todas las plataformas. Nos especializamos en la ejecución de acciones en social media y contenidos con inﬂuencers. Nuestro equipo de marketing suma un nuevo espacio dándole oportunidades a nuevos talentos y a talentos ya conocidos, para que aprovechen las plataformas audiovisuales que el entorno digital ofrece para interactuar con el público consumidor. Desarrollamos la comunicación y administración de contenidos digitales generando una nueva fuente de exposición para que los talentos moneticen su potencial de impacto.'

    const changeToGallery = () => {
        const internal = document.querySelector('.internal')
        
        internal.style.left = "-100%";
    }

    return (
        <Main>
            <div className="container container-internal">
                <div className="internal">

                    <div className="internal-main">
                        <div className="row hide-on-small-only">
                            <div className="col m5 offset-m2">
                                <img className="responsive-img" src={entretenimientoImg1} alt="" />
                            </div>
                            <div className="col m5">
                                <img className="responsive-img" src={entretenimientoImg2} alt="" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col offset-m3 m9">
                                <h2 className="entretenimiento-title">{title}</h2>
                            </div>
                        </div>

                        <div className="row hide-on-med-and-up">
                            <div className="col s6 ">
                                <img className="responsive-img" src={entretenimientoImg1} alt="" />
                            </div>
                            <div className="col s6">
                                <img className="responsive-img" src={entretenimientoImg2} alt="" />
                            </div>
                        </div>

                        <div className="row entretenimiento-row">
                            <div className="col m3 entretenimiento-col hide-on-small-only">
                                <h6 className="entretenimiento-subtitle">{subtitle}</h6>
                            </div>
                            <div className="col s12 m9">
                                <p className="entretenimiento-paragraph ">{paragraph}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 show-on-small center-align">
                                <h6 className="entretenimiento-subtitle">{subtitle}</h6>
                            </div>
                        </div>

                        <div className="btn-gallery go">
                            <img className="responsive-img" src={imgVolver} onClick={changeToGallery} alt="" />
                        </div>
                    </div>
                    
                    <div className="internal-gallery">
                        <Gallery data={data} title={title} />
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Entretenimientos;
