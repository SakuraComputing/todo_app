import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const destination = document.querySelector("#container");

ReactDOM.render(
    <App />, document.getElementById('root'), destination);
registerServiceWorker();
