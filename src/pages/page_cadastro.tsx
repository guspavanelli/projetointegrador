import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"
import { Link } from "react-router-dom";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import Linha from "../components/linha";
import { Usuarios } from "../types/usuarios";
import { MeuModuloApi } from "../api";
import { ChangeEvent, useState } from "react";


function PageCadastro(){
    TabTitle('Cadastro - Sangue Bom')

    //criar uma função que chame a cadastrar usuarios//

    return(
    <div className="g">
        <Cablogcad/>
        <div className="container_cadastro">
            <div className="castrado_image">
                <img className="cadastro_img" src={imagemcadastro} alt="imagem página de cadastro" />
            </div>
            <div className="cadastro_container_info">
                <div className="cadastro_info">
                    <div className="cadastro_info_dados">
                        <h2>Seja bem-vindo(a)!
                        Cadastre-se aqui:</h2>
                        <h4>Digite seus dados para criar sua conta:</h4>
                    <form className="cadastro_form">
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