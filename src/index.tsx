import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Router>
            <App />
            <ToastContainer />
        </Router>
    </React.StrictMode>
);
