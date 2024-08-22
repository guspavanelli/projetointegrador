import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Locais(){
    TabTitle('Locais - Sangue Bom')
    return(
        <div className="locais_container">
            <Cabecalho />
            <div className="info_title">
                <h1>Locais de Doação</h1>
                <h3>Confira os locais para doação em Bauru-SP!</h3>
            </div>
        </div>
    )
}

export default Locais;