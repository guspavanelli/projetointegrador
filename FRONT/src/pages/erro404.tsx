import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import BloodTypeSelector from "../components/buttons/botaoflutuante";
import '../style/style.css'
import ExpandablePopup from "../components/buttons/botaoajuda";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BloodDonationCarousel from "../components/teste";
import React from "react";




function Erro404(){
    TabTitle('Erro 404 - Not Found')
    const Erro404: React.FC = () => {
        return (
          <div>
            <Cabecalho/>
            <div className="home_posso_doar">
                <h1>Pagina Erro 404</h1>
                <BloodTypeSelector/>
                <ExpandablePopup />
                <h1>Pagina Erro 404</h1>
            <h1>Bem-vindo ao Sistema de Doação de Sangue</h1>
            <BloodDonationCarousel />
            </div>    
            
        </div>
        )
      }
        
    
}

export default Erro404;