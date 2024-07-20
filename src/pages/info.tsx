import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Info(){
    TabTitle('Informações Gerais - Sangue Bom')
    return(
        <div className="info_container">
            <Cabecalho/>
            <div className="title_info">
                <h1 className="h1_info">Pagina Info</h1>
            </div>
        </div>
    )
}

export default Info;