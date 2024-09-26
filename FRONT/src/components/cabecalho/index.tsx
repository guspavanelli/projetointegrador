import { Link } from "react-router-dom";
import '../../style/style.css'
import Linha from "../linha";
import Botao from "../../components/buttons/login/index";

function Cabecalho(){
    return(
        <div className="cab_container">
            <Link className="cab_logo" to="/">
            <div >
                SANGUE BOM
            </div>
                </Link> 
            <div className="cab_options">
                <Link className="cab_options_home"to="/locais"><div >Locais</div></Link>
                <Link className="cab_options_info"to="/info"><div>Informações</div></Link>
                <Link className="cab_options_sobre"to="/sobre"><div >Sobre</div></Link>
            </div>
            <Botao/>
        </div>
    )
}

export default Cabecalho;


