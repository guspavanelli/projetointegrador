import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import Coracao from "../components/heart";

function Erro404(){
    TabTitle('Erro 404 - Not Found')
    return(
        <div>
            <Cabecalho/>
            <h1>Pagina Erro 404</h1>
            <Coracao/>
        </div>
    )
}

export default Erro404;