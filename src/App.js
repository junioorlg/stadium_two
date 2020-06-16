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
					</Switch>
				</Router>
			</div>
		);	
	}
}

export default App;