import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'tailwindcss/tailwind.css';
import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
