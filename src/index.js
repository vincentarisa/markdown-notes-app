import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Styles/main.css'
import './Styles/navbar.css';
import './Styles/sidebar.css'
import './Styles/editor.css'
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
