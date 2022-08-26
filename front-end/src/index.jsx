import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/mainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
