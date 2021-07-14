import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'
import "tailwindcss/tailwind.css"
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('body')
);

