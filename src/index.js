import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { About } from "./components/about/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detail } from './components/detail/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/detail/:id" element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>

);

