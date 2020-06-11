import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* fonts */
import './fonts/Galano_Grotesque.otf';
import './fonts/Galano_Grotesque_Medium.otf';
import './fonts/Galano_Grotesque_Bold.otf';
import './fonts/Galano_Grotesque_Extra_Bold.otf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
