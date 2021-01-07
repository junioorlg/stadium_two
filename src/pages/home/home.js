import React, { Component } from 'react';
import Main from './../main/main'
import { Link } from "react-router-dom";

import './home.scss';
import '../../media/esfera-stadium.png'

//Languages
import { withTranslation } from 'react-i18next'

class Home extends Component {

    componentDidMount () {
        const w = window.innerWidth

        const contentAnimation = document.querySelector('.content-animation');
        const circle           = document.querySelector('.circle');
        const circleShadow     = document.querySelector('.circle-shadow');
        const script           = document.createElement("script");
        const nodos            = document.querySelectorAll('.nodo');
        const firstAnimation   = document.querySelectorAll('.first-animation');

        contentAnimation.onmouseenter = () => {
            circle.style.animationPlayState = 'paused';
            circleShadow.style.animationPlayState = 'paused';
        };
        
        contentAnimation.onmouseleave = () => {
            circle.style.animationPlayState = 'running';
            circleShadow.style.animationPlayState = 'running';
        }

        setTimeout( () => {
            var elmsAnimationFade = document.querySelectorAll( '.animate-fade' );

            [].forEach.call( elmsAnimationFade, function( elm ) {
                elm.classList.remove( 'hide-o' );
            });

        }, 500 )
        
        script.src = "./animation.js";
        script.async = true;

        document.body.appendChild(script);
        
        if ( w > 600 ) {
            nodos.forEach( nodo => {
                nodo.addEventListener("mouseover", () => {
                    firstAnimation.forEach( elm => {
                        elm.classList.remove('first-animation')
                    })
                });
            })
        }
    }

    render() {

        return (
            <Main>
                <div className="container home">
                    <div className="row">
                        <div className="col m10 offset-m1 s12 valign-wrapper">
        
                            <div className="transition fadeIn loaded">
                                <div className="layout__web">
                                    <div className="web__layout web hasLoaded"></div>
                                </div>
                            </div>

                            <div className="content-animation animate-fade hide-o">
                                <div className="circle">
                                    <div className="content-nodos">
                                        <div className="nodos">
                                            <Link to="/deportes">
                                                <div className="nodo first-animation"  data-number="1"></div>
                                                <div className="label" data-number="1">{ this.props.t('Deporte') }</div>
                                            </Link>

                                            <Link to="/eventos">
                                                <div className="nodo"  data-number="2"></div>
                                                <div className="label" data-number="2">{ this.props.t('Eventos') }</div>
                                            </Link>

                                            <Link to="/medios">
                                                <div className="nodo"  data-number="3"></div>
                                                <div className="label" data-number="3">{ this.props.t('Gestion_medios') }</div>
                                                </Link>

                                            <Link to="/entretenimientos">
                                                <div className="nodo"  data-number="4"></div>
                                                <div className="label" data-number="4">{ this.props.t('Entretenimiento') }</div>
                                            </Link>

                                            <Link to="/estrategias">
                                                <div className="nodo"  data-number="5"></div>
                                                <div className="label" data-number="5">{ this.props.t('Estrategias') }</div>
                                            </Link>

                                            <Link to="/esports">
                                                <div className="nodo"  data-number="6"></div>
                                                <div className="label" data-number="6">{ this.props.t('Esport') }</div>
                                            </Link>
                                        </div>

                                        <div className="lines">
                                            <div className="line" data-number="1"></div>
                                            <div className="line" data-number="2"></div>
                                            <div className="line" data-number="3"></div>
                                            <div className="line" data-number="4"></div>
                                            <div className="line" data-number="5"></div>
                                            <div className="line" data-number="6"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="circle-shadow"></div>
                            </div>

                            <div className="steve-jobs first-animation">
                                <b>30 años</b> <hr />
                            </div>
                            {/*<div dangerouslySetInnerHTML={htmlDoc} />*/}
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
}

export default withTranslation()( Home );