import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho from '../components/cabecalho';
import Footer from '../components/footer'; 
import BloodTypeSelector from "../components/buttons/botaoflutuante";
import ExpandablePopup from '../components/buttons/botaoajuda';
import DonationLocation from '../components/Locais_home';
import hemonucleob from '../assests/locais/logo famesp.png'
import hemonucleop from '../assests/locais/logo_hemovida.jpg'
import { TabTitle } from '../components/GeneralFunctions/GeneralFunctions';
import imagemteste from "../assests/imagem login.jpg"; 
import imagemcadastro from "../assests/imagem cadastro.jpg"; 
import { Usuarios } from "../types/usuarios";
import { ModuloApi } from "../api";
import Teste from "./teste";
import PageCadastro from "./page_cadastro";
import Carousel from "../components/carrossel";

function Home() {
    TabTitle('Home - Sangue Bom');
    return (
        <div className='home_container'>
            {/* <Cabecalho /> */}
            <div className="home_posso_doar">
            <Cabecalho/>
            <Carousel/>

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
            <DonationLocation
            name="Hemonucleo Hospital de Base"
            endereco="Endereço: R. Monsenhor Claro, 8-88 - Centro, Bauru - SP"
            phone="Contato: (14) 3231-4771"
            imageUrl={hemonucleob} 
            mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.518845994719!2d-49.0769005!3d-22.3298397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67abe122bd7d%3A0xafb31e84daef97ab!2sHemon%C3%BAcleo!5e0!3m2!1sen!2sbr!4v1724718310355!5m2!1sen!2sbr"
            />
            <DonationLocation
            name="Hemovida - Benefiência Portuguesa"
            endereco="Endereço: Rua Rio Branco, 13-83 Centro Bauru, SP"
            phone="Contato: (14)3223-6933 "
            imageUrl={hemonucleop} 
            mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.747965015958!2d-49.0702758!3d-22.3276746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67b725476f9f%3A0x4406c4303c47f58a!2sHospital%20Benefic%C3%AAncia%20Portuguesa%20de%20Bauru!5e0!3m2!1sen!2sbr!4v1724798494191!5m2!1sen!2sbr"
            />
            <h2>Confira se você está apto a doar</h2>
            <Teste />
            <h2>Cadastre-se</h2>
            <PageCadastro/>
            <Footer />
            <BloodTypeSelector />
            <ExpandablePopup />
        </div>
    );
}

export default Home;
