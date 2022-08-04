import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TopHeader from './context/Components/TopHeader/TopHeader'
import SecondaryMenu from './context/Components/SecondaryMenu/SecondaryMenu.js'
import MainMenu from './context/Components/MainMenu/MainMenu.js';
import Footer from './context/Components/Footer/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <BrowserRouter>
     <TopHeader /> 
     <SecondaryMenu />
     <MainMenu />
     <App />
     <Footer />
     </BrowserRouter>
 
   
 
);


