import React, { Component } from 'react';
import M from 'materialize-css';
import './menu.scss';

import logo  from './../../media/logo-stadium.png'
import logoW from './../../media/logo-stadium-w.png'

//Languages
import { withTranslation } from 'react-i18next'

import { Link } from "react-router-dom";

class Menu extends Component {

    constructor() {
        super();

        this.state = { logoStadium: logo }
    }

    componentDidMount() {
        const body = document.querySelector('body');
        const elmsToDelete = document.querySelectorAll('.sidenav-overlay, .drag-target.right-aligned')

        const activeMenu     = document.querySelector( '#active-submenu' );
        const contentMenu    = document.querySelector( '.content-menu' );
        const contentSubMenu = document.querySelector( '.content-submenu' );

        const elems       = document.querySelectorAll('.sidenav');
        const iconBurguer = document.querySelector('.sidenav-trigger');
        const options     = {
            edge: "right",
            inDuration: 800,
            outDuration: 800,
            onOpenStart: () => {
                const solialLink  = document.querySelectorAll('.social-link');

                iconBurguer.classList.add( 'hide-opacity' );

                [].forEach.call( solialLink, function( elm ) {
                    elm.classList.add( 'white-text' );
                });
            },
            onOpenEnd: () => { this.setState({ logoStadium: logoW }) },
            onCloseStart : () => { this.setState({ logoStadium: logo }) },
            onCloseEnd : () => {
                const solialLink  = document.querySelectorAll('.social-link');

                iconBurguer.classList.remove( 'hide-opacity' );

                [].forEach.call( solialLink, function( elm ) {
                    elm.classList.remove( 'white-text' );
                });
            }
        };

        M.Sidenav.init(elems, options);
            
        activeMenu.addEventListener( 'click', function( event ) {
            contentMenu.classList.toggle( 'active-submenu' );
            contentSubMenu.classList.toggle( 'active' );
        });

        body.removeAttribute('style');
        elmsToDelete.forEach(elm => elm.remove());
    }

    render() {
        const {logoStadium} = this.state

        return (
            <div className="menu-component">
                    <Link to="/">
                        <div className="brand-logo">
                            <img src={logoStadium} className="responsive-img" alt="stadium" />
                        </div>
                    </Link>

                    <ul className="sidenav" id="slide-out">
                        <div className="item-close">
                            <i className="sidenav-close material-icons">close</i>
                        </div>

                        <div className="content-menu">
                            <li id="active-submenu" className="link-menu"><span>{ this.props.t('Servicios') }</span></li>
                            
                            <ul className="content-submenu">
                                <li className="link-submenu"><Link to="/deportes">{ this.props.t('Deporte') }</Link></li>
                                <li className="link-submenu"><Link to="/eventos">{ this.props.t('Eventos') }</Link></li>
                                <li className="link-submenu"><Link to="/estrategias">{ this.props.t('Estrategias') }</Link></li>
                                <li className="link-submenu"><Link to="/medios">{ this.props.t('Gestion_medios') }</Link></li>
                                <li className="link-submenu"><Link to="/entretenimientos">{ this.props.t('Entretenimiento') }</Link></li>
                            </ul>

                            <li className="link-menu"><Link to="/equipo">{ this.props.t('Equipo') }</Link></li>
                            <li className="link-menu"><Link to="/contacto">{ this.props.t('Contacto') }</Link></li>
                        </div>
                    </ul>

                    <a href="collapsible.html" data-target="slide-out" className="sidenav-trigger show-on-large right">
                        <i className="material-icons black-text">menu</i>
                    </a>
            </div>
        );
    }
}

export default withTranslation()(Menu);