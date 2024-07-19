import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Checkin(){
    TabTitle('CheckIn - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
            <h1>Pagina Check IN</h1>
        </div>
    )
}

export default Checkin;