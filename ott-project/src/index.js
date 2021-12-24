import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page from './Page';
import './css/App.css';
import { BrowserRouter,
Routes,
Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
