import React from 'react';
import ReactDOM from 'react-dom';  // Note the change here
import App from './App';
import {transitions, positions, Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
};
ReactDOM.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <App/>
    </AlertProvider>,
    document.getElementById('root')
);