import { Link } from "react-router-dom";
import Botao from "../../components/buttons/login/index";
import img_logo from "../../assests/logomarca-sanguebom.png"; 


function Cabecalho(){
    return(
        <div className="cab_container">
            <Link to="/">
            <img className='img_logo' src={img_logo} title="logomarca SangueBom" alt="Logomarca SangueBom" />
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


