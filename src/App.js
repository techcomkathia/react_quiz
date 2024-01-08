// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import EstilosGlobais from './components/EstilosGlobais';
import { ContainerApp } from './components/AppStyles';

function App() {
  return (
    <ContainerApp>
      <EstilosGlobais/>

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/quiz' Component={Quiz}/>
        </Routes>
        
      
      </BrowserRouter>

      
    </ContainerApp>
   

  );
}

export default App;
