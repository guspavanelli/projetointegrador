import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css'
import HemonucleoB from '../assests/locais/hemonucleo_base.jpg'
import HemonucleoP from '../assests/locais/beneficienciaport.webp'

function Locais(){
    TabTitle('Locais - Sangue Bom')

    

    return(
        <div className="locais_container">
            <Cabecalho/>
            <div className="info_title">
                <h1>Locais de Doação</h1>
                <h3>Confira os locais para doação em Bauru-SP!</h3>
            </div>
            <div className="pai_blocos_locais">
                <div className="filho_local1">
                    <div className="local_fotos">
                        <iframe className="iframe_maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.518845994719!2d-49.0769005!3d-22.3298397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67abe122bd7d%3A0xafb31e84daef97ab!2sHemon%C3%BAcleo!5e0!3m2!1sen!2sbr!4v1724718310355!5m2!1sen!2sbr" width="600" height="450"></iframe>
                    </div>
                    <div className="info_local_maps">
                        <div className="resumo_local">
                            <img src={HemonucleoB} className="imagemHemonucleo" alt="Hemonucleo do Hospital de Base de Bauru-SP" />
                        </div>
                        <div className="botao_local"></div>
                    </div>                        
                </div>
                <div className="filho_local2">
                    <div className="local_fotos">
                        <iframe className="iframe_maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.747965015958!2d-49.0702758!3d-22.3276746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67b725476f9f%3A0x4406c4303c47f58a!2sHospital%20Benefic%C3%AAncia%20Portuguesa%20de%20Bauru!5e0!3m2!1sen!2sbr!4v1724798494191!5m2!1sen!2sbr" width="600" height="450"></iframe>
                    </div>
                    <div className="info_local_maps">
                        <div className="resumo_local">
                            <img src={HemonucleoP} className="imagemHemonucleo" alt="Hemonucleo Hemovida do Hospital Benefiência Portuguesa de Bauru-SP" />
                        </div>
                        <div className="botao_local"></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Locais;