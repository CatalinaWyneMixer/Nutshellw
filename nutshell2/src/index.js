import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApplicationViews from './ApplicationViews'
import registerServiceWorker from './registerServiceWorker';
//Route included to wrap and make routing happen
ReactDOM.render(

    <ApplicationViews />
    
    ,document.getElementById('root'));

registerServiceWorker();
