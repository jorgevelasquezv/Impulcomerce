import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Axios from 'axios'

Axios.defaults.baseURL = 'https://servicios-locales.herokuapp.com';
// Axios.defaults.baseURL = 'http://localhost:4000/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
