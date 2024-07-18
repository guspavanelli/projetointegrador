import { Link } from "react-router-dom";
import '../../style/style.css'
import Linha from "../linha";

function Cabecalho(){
    return(
        <div className="cab_container">
            <Link className="cab_logo" to="/">
            <div >
                SANGUE BOM
            </div>
                </Link> 
            <div className="cab_options">
                <Link className="cab_options_home"to="/"><div >Home</div></Link>
                <Link className="cab_options_info"to="/info"><div>Informações</div></Link>
                <Link className="cab_options_check"to="/checkin"><div >Checkin</div></Link>
            </div>
            <div className="cab_login">
                <Link className="teste"to="/pagelogin">
                    <div >
                        LOGIN
                    </div>  
                </Link>
            </div>
        </div>
    )
}

export default Cabecalho;