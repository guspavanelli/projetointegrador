import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Checkin(){
    TabTitle('CheckIn - Sangue Bom')
    return(
        <div className="check_container">
            <Cabecalho/>
            <div className="check_page_title">
                <h1>Check IN</h1>
                <h3>Página para fazer checkin</h3>
            </div>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Checkin;