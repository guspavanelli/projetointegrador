import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Checkin(){
    TabTitle('CheckIn - Sangue Bom')
    return(
        <div className="check_container">
            <Cabecalho/>
            <div className="check_page_title">
                <h1>Pagina Check IN</h1>
            </div>
        </div>
    )
}

export default Checkin;