import './App.css';
import { Routes, Route } from 'react-router-dom';
import Erro404 from './pages/erro404';
import Home from './pages/home';
import Checkin from './pages/checkin';
import Locais from './pages/locais';
import PageCadastro from './pages/page_cadastro';
import PageLogin from './pages/page_login';
import Perfil from './pages/perfil';
import Sobre from './pages/sobre';
import Teste from './pages/teste';
import Cabecalho from './components/cabecalho';
import Form_teste from './pages/teste_iv';


function App() {
  return (
    <div className='container_body'>
      <Routes>
        <Route path='*' element={<Erro404/>}>
        </Route>      
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/checkin' element={<Checkin/>}>
        </Route>
        <Route path='/locais' element={<Locais/>}>
        </Route>
        <Route path='/pagecadastro' element={<PageCadastro/>}>
        </Route>
        <Route path='/pagelogin' element={<PageLogin/>}>
        </Route>
        <Route path='/checkin' element={<Checkin/>}>
        </Route>
        <Route path='/perfil' element={<Perfil/>}>
        </Route>
        <Route path='/sobre' element={<Sobre/>}>
        </Route>
        <Route path='/teste' element={<Teste/>}>
        </Route> 
        <Route path='/form_teste' element={<Form_teste/>}>
        </Route>     
      </Routes> 
    </div>
  );
}

export default App;
