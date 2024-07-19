import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"
import { Link } from "react-router-dom";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";


function PageCadastro(){
    TabTitle('Cadastro - Sangue Bom')
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
                        <Link className="return_form_cad" to="/pagelogin">
                            <p><b>Já é um(a) Sangue Bom?</b> Clique <b>aqui</b> e faça seu login!
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PageCadastro;