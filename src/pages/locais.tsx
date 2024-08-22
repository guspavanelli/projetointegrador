import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Locais(){
    TabTitle('Locais - Sangue Bom')
    return(
        <div className="pai_locais">
            <Cabecalho/>
            <h1 className="title_locais">Locais de Doação</h1>
            <h3 className="sub_title_locais">Confira os locais para doação em Bauru-SP!</h3>
            <div className="pai_blocos_locais">
                <div className="filho_local1"></div>
                <div className="filho_local2"></div>
            </div>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Locais;