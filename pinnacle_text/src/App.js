import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import HomeView from './components/HomeView';
import AboutMe from './components/AboutMe';
import ServicesView from './components/ServicesView';
import Portfolio from './components/Portfolio';

export default function App()  {



  return (
    <>
    {/* <h1>PINNACLE TEXT</h1> */}
      <BrowserRouter>
      <div>
          <Route exact path='/'
            component={HomeView} />
          <Route exact path='/services'
            component={ServicesView} />
          <Route exact path='/portfolio'
            component={Portfolio} />
          <Route exact path='/about'
            component={AboutMe} />
        </div>
      </BrowserRouter>
    </>
  );
}
