import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"; 
import { ChangeEvent, useState } from "react";
import { Usuarios } from "../types/usuarios";
import { ModuloApi } from "../api";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function PageCadastro() {
    TabTitle('Cadastro - Sangue Bom')
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageCadastro;
