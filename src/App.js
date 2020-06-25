import React, { Component } from 'react';
import './App.scss';

/* router */
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";

/* pages */
import Home from './pages/home/home';
import Deportes from './pages/internal/deportes/deportes';
import Eventos from './pages/internal/eventos/eventos';
import Medios from './pages/internal/medios/medios';
import Entretenimientos from './pages/entretenimientos/entretenimientos';
import Contacto from './pages/contacto/contacto';
import Estrategias from './pages/estrategias/estrategias';

/* style */

class App extends Component {
	render() {
		return (
			<div className="stadium">	
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/deportes">
							<Deportes />
						</Route>

						<Route path="/eventos">
							<Eventos />
						</Route>

						<Route path="/medios">
							<Medios />
						</Route>

                        <Route path="/entretenimientos">
							<Entretenimientos />
						</Route>

                        <Route path="/contacto">
							<Contacto />
						</Route>

                        <Route path="/estrategias">
							<Estrategias />
						</Route>
					</Switch>
				</Router>
			</div>
		);	
	}
}

export default App;