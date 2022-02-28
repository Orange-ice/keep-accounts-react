import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './views/home/home';
import Register from './views/register/register';
import Login from './views/login/login';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
