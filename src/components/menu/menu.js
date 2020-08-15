import React, { Component } from 'react';
import M from 'materialize-css';
import './menu.scss';

import logo  from './../../media/logo-stadium.png'
import logoW from './../../media/logo-stadium-w.png'

import { Link } from "react-router-dom";

class Menu extends Component {

    constructor() {
        super();

        this.state = {logoStadium: logo}
    }

    closeMenu () {
        console.log('debe cerrar menu');
        //var elems = document.querySelectorAll('.sidenav');
    }

    render() {
        const that = this;
        const {logoStadium} = this.state

        document.addEventListener('DOMContentLoaded', function() {
            var elems       = document.querySelectorAll('.sidenav');
            var solialLink  = document.querySelectorAll('.social-link');
            var iconBurguer = document.querySelector('.sidenav-trigger');

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

                    console.log(solialLink)

                    iconBurguer.classList.add( 'hide-opacity' );

                    [].forEach.call( solialLink, function( elm ) {
                        elm.classList.add( 'white-text' );
                    });
                },
                onOpenEnd: () => {
                    //that.setState({ logoStadium: logoW })
                    
                },
                onCloseStart : () => {
                    //that.setState({ logoStadium: logo })
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
                            <li id="active-submenu" className="link-menu"><a href="#">Servicios</a></li>
                            
                            <ul className="content-submenu">
                                <li className="link-submenu"><Link to="/deportes">Deporte</Link></li>
                                <li className="link-submenu"><Link to="/eventos">Eventos</Link></li>
                                <li className="link-submenu"><Link to="/estrategias">Estrategias</Link></li>
                                <li className="link-submenu"><Link to="/medios">Gestión de medios</Link></li>
                                <li className="link-submenu"><Link to="/entretenimientos">Entretenimiento</Link></li>
                            </ul>

                            <li className="link-menu"><Link to="/equipo">Equipo</Link></li>
                            <li className="link-menu"><Link to="/contacto">Contacto</Link></li>
                        </div>
                    </ul>

                    <a href="collapsible.html" data-target="slide-out" className="sidenav-trigger show-on-large right">
                        <i className="material-icons black-text">menu</i>
                    </a>
            </div>
        );
    }
}

export default Menu;