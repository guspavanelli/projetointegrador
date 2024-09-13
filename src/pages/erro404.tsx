import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import Coracao from "../components/heart";
import '../style/style.css'

function Erro404(){
    TabTitle('Erro 404 - Not Found')
    return(
        <div>
            <Cabecalho/>
            <div className="home_posso_doar">
                <h1>Pagina Erro 404</h1>
            </div>    
            
        </div>
    )
}

export default Erro404;