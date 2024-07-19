import Cablogcad from "../components/cabecalho-log-cad";
import imagemlogin from "../assests/imagem login.jpg"
import { Link } from "react-router-dom";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";


function PageLogin(){
    TabTitle('Login - Sangue Bom')
    return(
    <div>
        <Cablogcad/>
        <div className="pai_componentes_loginecad">
            <div className="molde_imagem_logecad">
                <img className="imagem_loginecad" src={imagemlogin} alt="imagem página de login" />
            </div>
            <div className="molde_form_login">
                <div className="pai_login">
                    <div className="title_form_login">
                        <h2 className="title_login">Login</h2>
                        <hr className="line_divisor"/>
                        <h4>Digite seu email e senha para entrar:</h4>
                        <Link className="botao_loginecad" to="/"><h3>Entrar</h3></Link>
                        <hr className="line_divisor" />
                        <h4>Ou entre com o Google:</h4>
                        <a href="#" className="botao-google">
                            <img className="imagem_botao_google" src="https://developers.google.com/identity/images/g-logo.png" alt="Logo do Google"></img>
                            Continue com Google
                        </a>
                        <p>Ao clicar em Entrar, você concorda com nossos Termos de <br />
                            Serviço e Política de Privacidade
                        </p>
                        <hr className="line_divisor"/>
                        <h5>É novo(a) por aqui? Então cadastre-se para criar sua conta!</h5>
                        <Link className="botao_loginecad" to="/pagecadastro"><h3>Cadastre-se aqui</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PageLogin;