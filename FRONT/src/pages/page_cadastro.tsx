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

    //cadastro de usuarios//
    const [addNome, setaddNome] = useState ('');
    const [addUsername, setaddUsername] = useState('');
    const [addEmail, setaddEmail] = useState('');
    const [addSenha, setaddSenha] = useState('');
    const [addCosenha, setaddCosenha] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeNome = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddNome (info.target.value);
    }

    const handleChangeUsername = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddUsername (info.target.value);
    }

    const handleChangeEmail = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddEmail (info.target.value);
    }

    const handleChangeSenha = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddSenha (info.target.value);
    }

    const handleChangeCosenha = (info:ChangeEvent<HTMLInputElement>) =>{
        setaddCosenha (info.target.value);
    }
    //funções //

    const [usuarios, setUsuarios] = useState <Usuarios[]>([]);

    const CarregarUsuarios = async() => {
        setLoading(true);
        let json = await MeuModuloApi.CarregarUsuarios();
        const Dados = Array.isArray(json) ? json: [json];
        setLoading (false);
        setUsuarios (Dados);



    }

    const CadastrarUsuarios = async () => {

        if (addNome && addUsername && addEmail && addSenha && addCosenha){

            let json = await 
                MeuModuloApi.CadastrarUsuarios (addNome, addUsername, addEmail,addSenha, addCosenha, '1');
    
        if (json.id){
            alert('Post adicionado com sucesso')
            setUsuarios((usuarios) => [...usuarios,json]);
        }else {
            alert('Ocorreu alguma falha')
        }

    } else {
        alert('preencha as informações');
    }

 }






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
                            <input type="text" placeholder="seu nome" onChange={handleChangeNome}/>
                        </div>
                        <div>
                            <input type="text" placeholder="username" onChange={handleChangeUsername} />
                        </div>
                        <div>
                            <input type="email" placeholder="seu e-mail" onChange={handleChangeEmail} />
                        </div>
                        <div>
                            <input type="passowrd" placeholder="digite sua senha" onChange={handleChangeSenha} />
                        </div>
                        <div>
                            <input type="passowrd" placeholder="confirme sua senha" onChange={handleChangeCosenha} />


                        <button onClick={CadastrarUsuarios}> Confirmar Cadastro </button>
                        <hr />

                        
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