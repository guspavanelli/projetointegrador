import React from 'react';
import './App.css';
import { Route, Routes, Router } from 'react-router-dom';
import Home from './pages/home';
import Checkin from './pages/checkin';
import Info from './pages/info';
import Sobre from './pages/sobre';
import Perfil from './pages/perfil';
import PageLogin from './pages/page_login';
import PageCadastro from './pages/page_cadastro';
import Locais from './pages/locais';
import Erro404 from './pages/erro404';

function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Erro404/>}>
        </Route>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/checkin' element={<Checkin/>}>
        </Route>
        <Route path='/info' element={<Info/>}>
        </Route>
        <Route path='/locais' element={<Locais/>}>
        </Route>
        <Route path='/login' element={<PageLogin/>}>
        </Route>
        <Route path='/cadastro' element={<PageCadastro/>}>
        </Route>
        <Route path='/perfil' element={<Perfil/>}>
        </Route>
        <Route path='/sobre' element={<Sobre/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
