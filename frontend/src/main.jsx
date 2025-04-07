import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
  <Router>
    <App />
  </Router>
);