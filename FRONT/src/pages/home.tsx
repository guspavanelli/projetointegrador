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
import DonationLocation from '../components/teste';
import hemonucleob from '../assests/locais/logo famesp.png'


function Home() {
    TabTitle('Home - Sangue Bom');
    return (
        
        <div className='home_container'>
                        <Cabecalho/>

            <div className="home_posso_doar">
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
            <h2>Veja os Locais de Doação em Bauru-SP:</h2>
            <Divlocal />
            <DonationLocation
            name="Hemonucleo Hospital de Base"
            endereco="Endereço: R. Monsenhor Claro, 8-88 - Centro, Bauru - SP"
            phone="Contato: (14) 3231-4771"
            imageUrl={hemonucleob} 
            mapUrl="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=YOUR_API_KEY"
            />
            <DonationLocation
            name="Hemovida - Benefiência Portuguesa"
            endereco="Endereço: Rua Rio Branco, 13-83 Centro Bauru, SP"
            phone="Contato: (14)3223-6933 "
            imageUrl={hemonucleob} 
            mapUrl="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=YOUR_API_KEY"
            />
            <Footer />
            <BloodTypeSelector/>
            <ExpandablePopup/>
        </div>
    );
}

export default Home;
