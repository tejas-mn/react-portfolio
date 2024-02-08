import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemedApp}  from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { LeftComponent } from './components/LeftComponent';
import { RightComponent } from './components/RightComponent';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Work } from './components/Work';
import { ThemeProvider } from './Providers/ThemeProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ThemedApp/>}>
            <Route path='about' element = {<About/>} />
            <Route path='experience' element = {<Experience/>} />
            <Route path='work' element = {<Work/>} />
          </Route>
          <Route path='/left' element={<LeftComponent/>}> </Route>
          <Route path='/right' element={<RightComponent/>}> </Route>
          <Route path='/app' element={<App/>}></Route> 
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
