import React, { Component } from 'react';
import M from 'materialize-css';
import './menu.scss';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Menu extends Component {

    closeMenu () {
        console.log('debe cerrar menu');
        //var elems = document.querySelectorAll('.sidenav');
    }

    render() {
        const logo = require('./../../media/logo-stadium.png');

        document.addEventListener('DOMContentLoaded', function() {
            var elems       = document.querySelectorAll('.sidenav');
            var solialLink  = document.querySelectorAll('.social-link');
            var iconBurguer = document.querySelector('.sidenav-trigger');
            var logo        = document.querySelector('.brand-logo');

            /* menu */
            var activeMenu     = document.querySelector( '#active-submenu' );
            var contentMenu    = document.querySelector( '.content-menu' );
            var contentSubMenu = document.querySelector( '.content-submenu' );
            
            activeMenu.addEventListener( 'click', function( event ) {
                contentMenu.classList.toggle( 'active-submenu' );
                contentSubMenu.classList.toggle( 'active' );
            });

            M.Sidenav.init(elems, {
                edge: "right",
                inDuration: 800,
                outDuration: 800,
                onOpenStart: () => {
                    logo.classList.add( 'white-text' );
                    iconBurguer.classList.add( 'hide-opacity' );

                    [].forEach.call( solialLink, function( elm ) {
                        elm.classList.add( 'white-text' );
                    });
                },
                onOpenEnd: () => {
                },
                onCloseStart : () => {
                    logo.classList.remove( 'white-text' );
                },
                onCloseEnd : () => {
                    iconBurguer.classList.remove( 'hide-opacity' );

                    [].forEach.call( solialLink, function( elm ) {
                        elm.classList.remove( 'white-text' );
                    });
                }
            });
        });

        return (
            <div className="menu-component">
                <Router>
                    <Link to="/">
                        <div className="brand-logo">
                            <img src={logo} className="responsive-img" alt="stadium" />
                        </div>
                    </Link>

                    <ul className="sidenav" id="slide-out">
                        <div className="item-close">
                            <i className="sidenav-close material-icons">close</i>
                        </div>

                        <div className="content-menu">
                            <li id="active-submenu" className="link-menu"><a href="collapsible.html">Servicios</a></li>
                            
                            <ul className="content-submenu">
                                <li className="link-submenu"><Link to="/deportes">Deporte</Link></li>
                                <li className="link-submenu"><Link to="/eventos">Eventos</Link></li>
                                <li className="link-submenu"><Link to="/producciones">Producciones</Link></li>
                                <li className="link-submenu"><Link to="/gestion_medios">Gestión de medios</Link></li>
                                <li className="link-submenu"><Link to="/entretenimiento">Entretenimiento</Link></li>
                            </ul>

                            <li className="link-menu"><Link to="/servicios" onClick={() => this.closeMenu()}>Equipo</Link></li>
                            <li className="link-menu"><a href="collapsible.html">Contacto</a></li>
                        </div>
                    </ul>

                    <a href="collapsible.html" data-target="slide-out" className="sidenav-trigger show-on-large right">
                        <i className="material-icons black-text">menu</i>
                    </a>
                </Router>
            </div>
        );
    }
}

export default Menu;