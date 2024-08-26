import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Teste(){
    TabTitle('Teste - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
            <p>Página Teste</p>
        
        <br />
        <br />
        <Footer/>
        </div>
    )
}

export default Teste;