import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"
import { Link } from "react-router-dom";


function PageCadastro(){
    return(
    <div className="g">
        <Cablogcad/>
        <div className="pai_componentes_loginecad">
            <div className="molde_imagem_logecad">
                <img className="imagem_loginecad" src={imagemcadastro} alt="imagem página de cadastro" />
            </div>
            <div className="molde_form_login">
            <div className="pai_login">
                    <div className="title_form_cadastro">
                        <h2 className="title_cadastro">Cadastro</h2>
                        <hr className="line_divisor"/>
                        <h4>Digite seu username, nome, email esenha para entrar:</h4>
                        <Link className="botao_loginecad" to="/pagelogin"><h3>Cadastrar</h3></Link>
                        <hr className="line_divisor" />
                        <h4>Ou cadastre-se com o Google:</h4>
                        <a href="#" className="botao-google">
                            <img className="imagem_botao_google" src="https://developers.google.com/identity/images/g-logo.png" alt="Logo do Google"></img>
                            Continue com Google
                        </a>
                        <p>Ao clicar em Cadastrar, você concorda com nossos Termos de <br />
                            Serviço e Política de Privacidade
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PageCadastro;