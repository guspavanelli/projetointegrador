import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import BloodTypeSelector from "../components/buttons/botaoflutuante";
import '../style/style.css'
import ExpandablePopup from "../components/buttons/botaoajuda";

function Erro404(){
    TabTitle('Erro 404 - Not Found')
    return(
        <div>
            <Cabecalho/>
            <div className="home_posso_doar">
                <h1>Pagina Erro 404</h1>
                <BloodTypeSelector/>
                <ExpandablePopup />
            </div>    
            
        </div>
    )
}

export default Erro404;