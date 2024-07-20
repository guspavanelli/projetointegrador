import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"
import { Link } from "react-router-dom";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import Linha from "../components/linha";


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
                    <div>
                        <h2>Seja bem-vindo(a)!
                        Cadastre-se aqui:</h2>
                        <h4>Digite seus dados para criar sua conta:</h4>
                    <form>
                        <div>
                            <input type="text" placeholder="seu nome" name="" id="" />
                        </div>
                        <div>
                            <input type="text" placeholder="username" name="" id="" />
                        </div>
                        <div>
                            <input type="email" placeholder="seu e-mail" name="" id="" />
                        </div>
                        <div>
                            <input type="passowrd" placeholder="digite sua senha" name="senha" id="" />
                        </div>
                        <div>
                            <input type="passowrd" placeholder="confirme sua senha" name="confirme sua senha" id="" />
                        </div>
                        <div>
                            <input type="submit" value="Cadastre-se com email" />
                        </div>
                    </form>
                        <Link className="botao_loginecad" to="/pagelogin"><h3>Cadastrar</h3></Link>
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