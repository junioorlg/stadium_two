import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './i18n'; // Translation

/* fonts */
import './fonts/Galano_Grotesque.otf';
import './fonts/Galano_Grotesque_Medium.otf';
import './fonts/Galano_Grotesque_Bold.otf';
import './fonts/Galano_Grotesque_Extra_Bold.otf';
import './fonts/Galano_Grotesque_Semi_Bold.otf';

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <Suspense fallback={(<div>Loading...</div>)}>
        <App />
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
