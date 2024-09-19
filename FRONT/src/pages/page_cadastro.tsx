import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"; 
import { ChangeEvent, useState } from "react";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import { Usuarios } from "../types/usuarios";
import { ModuloApi } from "../api";

function PageCadastro() {
    TabTitle('Cadastro - Sangue Bom');
    
    const [addNome, setAddNome] = useState('');
    const [addEmail, setAddEmail] = useState('');
    const [addTelefone, setAddTelefone] = useState('');
    const [addSenha, setAddSenha] = useState('');
    const [addDataNascimento, setAddDataNascimento] = useState('');
    const [addTipoSanguineo, setAddTipoSanguineo] = useState('');
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [isErro, setIsErro] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
        setAddNome(e.target.value);
    }

<<<<<<< HEAD:src/pages/page_cadastro.tsx
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setAddEmail(e.target.value);
    }

    const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTelefone(e.target.value);
    }

    const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setAddSenha(e.target.value);
    }

    const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => {
        setAddDataNascimento(e.target.value);
    }

    const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => {
        setAddTipoSanguineo(e.target.value);
    }

    const carregarUsuarios = async () => {
        setLoading(true);
        setUsuarios([]);
        try {
            const json = await ModuloApi.CarregarUsuarios();
            const dataArray = Array.isArray(json) ? json : [json];
            setUsuarios(dataArray); 
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
        } finally {
            setLoading(false);
        }
    }

    const adicionarUsuarios = async () => {
        if (addNome && addEmail && addTelefone && addSenha && addDataNascimento && addTipoSanguineo) {
            try {
                const sucesso = await ModuloApi.AdicionarUsuario(
                    addNome, 
                    addEmail, 
                    addTelefone, 
                    addSenha, 
                    addDataNascimento, 
                    addTipoSanguineo
                );
                console.log(sucesso);
                if (sucesso) {
                    setMensagem('Cadastro realizado com sucesso❣️');
                    setIsErro(false);
                } else {
                    setMensagem('Verifique os campos e tente novamente');
                    setIsErro(true);
                }
            } catch (error) {
                console.error("Erro ao adicionar usuário:", error);
                setMensagem('Algo deu errado. Recarregue a página e tente novamente');
                setIsErro(true);
            }
        } else {
            setMensagem('Preencha todas as informações.');
            setIsErro(true);
        }

        setMostrarMensagem(true); // Mostrar mensagem após definir o estado

        // Ocultar a mensagem após 5 segundos
        setTimeout(() => {
            setMostrarMensagem(false);
        }, 5000); // Tempo em milissegundos
    }

    return (
        <div>
            <Cablogcad />
            <div className="container">
                <div className="form-wrapper">
                    <div className="image">
                        <img src={imagemcadastro} alt="img doação SangueBom" />
                    </div>
                    <div className="form">
                        <h3 className="tit_cads">Seja Bem-vindo(a)!<br />Cadastre-se aqui:</h3>
                        <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
                        <input type="text" value={addNome} onChange={handleChangeNome} placeholder="Nome Completo" />
                        <input type="email" value={addEmail} onChange={handleChangeEmail} placeholder="Informe seu melhor email" />
                        <input type="text" value={addTelefone} onChange={handleChangeTelefone} placeholder="Informe seu telefone" />
                        <input type="password" value={addSenha} onChange={handleChangeSenha} placeholder="Crie sua Senha de 8 dígitos" />
                        <div className="date-container">
                            <span>Data de Nascimento</span>
                            <input type="date" value={addDataNascimento} onChange={handleChangeDataNascimento} />
                        </div>
                        <select value={addTipoSanguineo} onChange={handleChangeTipoSanguineo}>
                            <option value="">Selecione o Tipo Sanguíneo</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="não informado">Não Sei</option>
                        </select>
                        {loading && <div>Carregando Conteúdo...</div>}
                        {!loading && <button className="btn_form" onClick={adicionarUsuarios}>Criar Cadastro</button>}
                        {mostrarMensagem && (
                            <div className={isErro ? "mensage mensage_erro" : "mensage mensage_sucesso"}>
                                {mensagem}
                            </div>
                        )}
                    </div>
                    <div className="retorno">
                        <a href="/" className="a_retorno">
                            <svg className="angle-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="#ff7f7f" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                        </a>
=======
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
>>>>>>> 78e53b7a6f825460b8ea30c7964efd99d7765588:FRONT/src/pages/page_cadastro.tsx
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageCadastro;
