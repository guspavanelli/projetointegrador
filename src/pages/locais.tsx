import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css'

function Locais(){
    TabTitle('Locais - Sangue Bom')
    return(
        <div className="locais_container">
            <Cabecalho/>
            <hr/>   
            <hr/>
            <hr/>
            <div className="info_title">
                <h1>Locais de Doação</h1>
                <h3>Confira os locais para doação em Bauru-SP!</h3>
            </div>
            <div className="pai_blocos_locais">
                <div className="filho_local1">
                    <div className="local_fotos"></div>
                    <div className="info_local_maps">
                        <div className="resumo_local"></div>
                        <div className="botao_local"></div>
                    </div>                        
                </div>
                <div className="filho_local2">
                    <div className="local_fotos"></div>
                    <div className="info_local_maps">
                        <div className="resumo_local"></div>
                        <div className="botao_local"></div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Locais;