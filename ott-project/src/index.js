import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from './Page1';
import './css/App.css';
import { BrowserRouter,
Routes,
Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
