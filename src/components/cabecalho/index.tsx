import { Link } from "react-router-dom";
import '../../style/style.css'

function Cabecalho(){
    return(
        <div className="cab_container">
            <div className="cab_logo">
                <Link to="/">SANGUE BOM</Link> 
            </div>
            <div className="cab_options">
                <div className="cab_options_home"><Link to="/">Home</Link></div>
                <div className="cab_options_info"><Link to="/info">Informações</Link></div>
                <div className="cab_options_check"><Link to="/checkin">Checkin</Link></div>
            </div>
            <div className="cab_login">
                <div className="teste">
                    <Link to="/pagelogin">LOGIN</Link>
                </div>  
            </div>
        </div>
    )
}

export default Cabecalho;