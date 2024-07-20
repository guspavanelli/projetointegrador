import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Info(){
    TabTitle('Informações Gerais - Sangue Bom')
    return(
        <div className="info_container">
            <Cabecalho/>
            <h1>Pagina Info</h1>
        </div>
    )
}

export default Info;