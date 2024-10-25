import './App.css';
import { Routes, Route } from 'react-router-dom'; // Não precisamos do BrowserRouter aqui
import Erro404 from './pages/erro404';
import Home from './pages/home';
import Checkin from './pages/checkin';
import Locais from './pages/locais';
import PageCadastro from './pages/page_cadastro';
import PageLogin from './pages/page_login';
import Perfil from './pages/perfil';
import Sobre from './pages/sobre';
import Teste from './pages/teste';
import Form_teste from './pages/teste_iv';
import React from 'react';
import { DoadorProvider } from './context/DoadorContext';  // Importe o contexto que você criou

function App() {
  return (
    <DoadorProvider>
      <div className='container_body'>
        <Routes>
          <Route path='*' element={<Erro404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/checkin' element={<Checkin />} />
          <Route path='/locais' element={<Locais />} />
          <Route path='/pagecadastro' element={<PageCadastro />} />
          <Route path='/pagelogin' element={<PageLogin />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/teste' element={<Teste />} />
          <Route path='/form_teste' element={<Form_teste />} />
        </Routes>
      </div>
    </DoadorProvider>
  );
}

export default App;
