import React, { Component } from 'react'

// CSS
import './App.scss'

// Router
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"
/*import { createBrowserHistory } from 'history';*/

// Pages
import Home from './pages/home/home'
import Contacto from './pages/contacto/contacto'
import Equipo from './pages/equipo/equipo'
import Page404 from './pages/page404/page404'

// Internals
import Estrategias from './pages/estrategias/estrategias'
import Entretenimientos from './pages/entretenimientos/entretenimientos'
import Eventos from './pages/eventos/eventos'
import Deportivo from './pages/deportivo/deportivo'
import Medios from './pages/medios/medios'

// Helpers
import { initAllImage } from './helper'

class App extends Component {
	render() {
		
		initAllImage()

		return (
			<div className="stadium">
				<Router>
					
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/contacto">
							<Contacto />
						</Route>

						<Route path="/equipo">
							<Equipo />
						</Route>

                        <Route exact path="/entretenimientos">
							<Entretenimientos />
						</Route>

                        <Route exact path="/eventos">
							<Eventos />
						</Route>

                        <Route exact path="/deportes">
							<Deportivo />
						</Route>

                        <Route exact path="/medios">
							<Medios />
						</Route>

                        <Route exact path="/estrategias">
							<Estrategias />
						</Route>

						<Route>
							<Page404 />
						</Route>
					</Switch>

				</Router>
			</div>
		);	
	}
}

export default App;

/*
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});*/