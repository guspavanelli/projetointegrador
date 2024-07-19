import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Teste(){
    TabTitle('Teste - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
            <p>Página Teste</p>
        </div>
    )
}

export default Teste;