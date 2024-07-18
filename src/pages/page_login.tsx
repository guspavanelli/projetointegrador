import Cablogcad from "../components/cabecalho-log-cad";
import imagemlogin from "../assests/imagem login.jpg"


function PageLogin(){
    return(
    <div>
        <Cablogcad/>
        <div className="pai_componentes_loginecad">
            <div className="molde_imagem_logecad">
                <img className="imagem_loginecad" src={imagemlogin} alt="imagem página de login" />
            </div>
            <div className="molde_form_login">
                
            </div>
        </div>
    </div>
    )
}

export default PageLogin;