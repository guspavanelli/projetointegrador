import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Locais(){
    TabTitle('Locais - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
            <h1>Locais de Doação</h1>
            <h3>Confira os locais para doação em Bauru-SP!</h3>
        </div>
    )
}

export default Locais;