import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css'
function Info(){
    TabTitle('Informações Gerais - Sangue Bom')
    return(
        <div className="info_container">
            <Cabecalho/>
            <div className="info_title">
                <h1>Pagina Info</h1>

            </div>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Info;