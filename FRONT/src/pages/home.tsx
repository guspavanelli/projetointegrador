import Cabecalho from '../components/cabecalho';
import Footer from '../components/footer';
import Comentarios from '../components/coments';
import { Link } from 'react-router-dom';
import { TabTitle } from '../components/GeneralFunctions/GeneralFunctions';
import Divlocal from '../components/Locais'; 
import BotaoLike from '../components/buttons/like';
import Locais from './locais';
import Complocais from '../components/Locais';
import BloodTypeSelector from "../components/buttons/botaoflutuante";
import ExpandablePopup from '../components/buttons/botaoajuda';


function Home() {
    TabTitle('Home - Sangue Bom');
    return (
        
        <div className='home_container'>
            <BloodTypeSelector/>
            <ExpandablePopup/>
            <hr/>   
            <hr/>
            <hr/>
            <div className="home_posso_doar">
            <Cabecalho/>
                <div className="home_pd_possodoar">
                    <h1>Posso doar?</h1>
                </div>
               
                <div className="home_pd_descubra">
                    <p>Faça o teste e descubra se você está apto para doação.</p>
                </div>
                <Link className="home_pd_teste" to="/teste">
                    <div>
                        <p>Teste</p>
                    </div>
                </Link>
            </div>
            <div>Veja os Locais de Doação</div>
            <Divlocal />
            <Footer />
        </div>
    );
}

export default Home;
