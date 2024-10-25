import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import { ModuloApi } from "../api";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import imagemcadastro from "../assests/imagem cadastro.jpg"; 
import '../style/style.css';
import { DoadorProvider, useDoador } from '../context/DoadorContext';  


function PageCadastro() {
    TabTitle('Autenticação - Sangue Bom');
    
    const navigate = useNavigate(); // Define o hook de navegação
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [isErro, setIsErro] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [addNOME, setAddNome] = useState('');
    const [addEMAIL, setAddEmail] = useState('');
    const [addTELEFONE, setAddTelefone] = useState('');
    const [addSENHA, setAddSenha] = useState('');
    const [addDATANASCIMENTO, setAddDataNascimento] = useState('');
    const [addTIPOSANGUINEO, setAddTipoSanguineo] = useState('');
    const [isCadastroSucesso, setIsCadastroSucesso] = useState(false);
    const { setDoador } = useDoador(); 



    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);
    const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => setAddNome(e.target.value);
    const handleChangeEmailCadastro = (e: ChangeEvent<HTMLInputElement>) => setAddEmail(e.target.value);
    const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => setAddTelefone(e.target.value);
    const handleChangeSenhaCadastro = (e: ChangeEvent<HTMLInputElement>) => setAddSenha(e.target.value);
    const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => setAddDataNascimento(e.target.value);
    const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => setAddTipoSanguineo(e.target.value);

    const loginUsuario = async () => {
        if (email && senha) {
            try {
                setLoading(true);
                const sucesso = await ModuloApi.RealizarLogin(email, senha);
                setMensagem(sucesso ? 'Login realizado com sucesso!' : 'Email ou senha incorretos. Tente novamente.');
                setIsErro(!sucesso);

                if (sucesso) {
                    navigate('/perfil'); 
                    setDoador(sucesso.doador); 
                }
            } catch (error) {
                setMensagem('Algo deu errado. Tente novamente.');
                setIsErro(true);
            } finally {
                setLoading(false);
                setMostrarMensagem(true);
                setTimeout(() => setMostrarMensagem(false), 5000);
            }
        } else {
            setMensagem('Preencha todas as informações.');
            setIsErro(true);
            setMostrarMensagem(true);
            setTimeout(() => setMostrarMensagem(false), 5000);
        }
    };

    const adicionarUsuarios = async () => {
        if (addNOME && addEMAIL && addTELEFONE && addSENHA && addDATANASCIMENTO && addTIPOSANGUINEO) {
            try {
                setLoading(true);
                const sucesso = await ModuloApi.AdicionarUsuario(
                    addNOME, addEMAIL, addTELEFONE, addSENHA, addDATANASCIMENTO, addTIPOSANGUINEO
                );
                setMensagem(sucesso ? 'Cadastro realizado com sucesso!' : 'Verifique os campos e tente novamente');
                setIsErro(!sucesso);

                if (sucesso) {
                    setIsLogin(true); 
                    setIsCadastroSucesso(sucesso); 

                }
            } catch (error) {
                setMensagem('Algo deu errado. Recarregue a página e tente novamente.');
                setIsErro(true);
            } finally {
                setLoading(false);
                setMostrarMensagem(true);
                setTimeout(() => setMostrarMensagem(false), 5000);
            }
        } else {
            setMensagem('Preencha todas as informações.');
            setIsErro(true);
            setMostrarMensagem(true);
            setTimeout(() => setMostrarMensagem(false), 5000);
        }
    };

    return (
        <div id="scroll1">
            <div className="container" style={{display: 'block', marginTop:'auto'}} >
                <div className="toggle-buttons">
                    <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Fazer Login</button>
                    <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Criar Cadastro</button>
                </div>
                <div className={`form-wrapper ${isCadastroSucesso ? 'reversed' : ''}`}>
                <img style={{padding: '0px', width:'50%'}} src={imagemcadastro} alt="img doação SangueBom" />

                    <div style={{padding: '0px', width:'50%', height: 'auto'}} className="form">
                        {isLogin ? (
                            <>
                                <h3 className="tit_cads">Bem-vindo de volta!</h3>
                                <p className="sub_tit_cads">Digite seu email e senha para entrar:</p>
                                <input type="email" value={email} onChange={handleChangeEmail} placeholder="Informe seu email" />
                                <input type="password" value={senha} onChange={handleChangeSenha} placeholder="Digite sua senha" />
                                {loading ? <div>Carregando...</div> : <button className="btn_form" onClick={loginUsuario}>Entrar</button>}
                            </>
                        ) : (
                            <>
                                <h3 className="tit_cads">Seja Bem-vindo(a)!<br />Cadastre-se aqui:</h3>
                                <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
                                <input type="text" value={addNOME} onChange={handleChangeNome} placeholder="Nome Completo" />
                                <input type="email" value={addEMAIL} onChange={handleChangeEmailCadastro} placeholder="Informe seu melhor email" />
                                <input type="text" value={addTELEFONE} onChange={handleChangeTelefone} placeholder="Informe seu telefone" />
                                <input type="password" value={addSENHA} onChange={handleChangeSenhaCadastro} placeholder="Crie sua Senha" />
                                <div className="date-container">
                                    <span>Data de Nascimento</span>
                                    <input type="date" value={addDATANASCIMENTO} onChange={handleChangeDataNascimento} />
                                </div>
                                <select value={addTIPOSANGUINEO} onChange={handleChangeTipoSanguineo}>
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
                                {loading ? <div>Carregando...</div> : <button className="btn_form" onClick={adicionarUsuarios}>Criar Cadastro</button>}
                            </>
                        )}

                        {mostrarMensagem && (
                            <div className={isErro ? "mensage mensage_erro" : "mensage mensage_sucesso"}>
                                {mensagem}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageCadastro;
