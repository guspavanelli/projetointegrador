import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Checkin(){
    TabTitle('CheckIn - Sangue Bom')
    return(
        <div className="check_container">
            <Cabecalho/>
            <div className="check_page_title">
                <h1>Pagina Check IN</h1>
            </div>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Checkin;