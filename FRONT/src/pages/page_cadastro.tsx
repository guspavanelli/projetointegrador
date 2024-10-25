import Cablogcad from "../components/cabecalho-log-cad";
import { ChangeEvent, useState } from "react";
import { Usuarios } from "../types/usuarios";
import { ModuloApi } from "../api";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import imagemcadastro from "../assests/imagem cadastro.jpg"; 
import '../style/style.css'

// function PageCadastro() {
//     TabTitle('Home - Sangue Bom')
//     const [addNOME, setAddNome] = useState('');
//     const [addEMAIL, setAddEmail] = useState('');
//     const [addTELEFONE, setAddTelefone] = useState('');
//     const [addSENHA, setAddSenha] = useState('');
//     const [addDATANASCIMENTO, setAddDataNascimento] = useState('');
//     const [addTIPOSANGUINEO, setAddTipoSanguineo] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [mensagem, setMensagem] = useState('');
//     const [isErro, setIsErro] = useState(false);
//     const [mostrarMensagem, setMostrarMensagem] = useState(false);

  

//     const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
//         setAddNome(e.target.value);
//     }

//     const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
//         setAddEmail(e.target.value);
//     }

//     const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => {
//         setAddTelefone(e.target.value);
//     }

//     const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
//         setAddSenha(e.target.value);
//     }

//     const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => {
//         setAddDataNascimento(e.target.value);
//     }

//     const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => {
//         setAddTipoSanguineo(e.target.value);
//     }

//     const adicionarUsuarios = async () => {
//         if (addNOME && addEMAIL && addTELEFONE && addSENHA && addDATANASCIMENTO && addTIPOSANGUINEO) {
//             try {
//                 const sucesso = await ModuloApi.AdicionarUsuario(
//                     addNOME, 
//                     addEMAIL, 
//                     addTELEFONE, 
//                     addSENHA, 
//                     addDATANASCIMENTO, 
//                     addTIPOSANGUINEO
//                 );
//                 console.log(sucesso);
//                 if (sucesso) {
//                     setMensagem('Cadastro realizado com sucesso❣️');
//                     setIsErro(false);
//                 } else {
//                     setMensagem('Verifique os campos e tente novamente');
//                     setIsErro(true);
//                 }
//             } catch (error) {
//                 console.error("Erro ao adicionar usuário:", error);
//                 setMensagem('Algo deu errado. Recarregue a página e tente novamente');
//                 setIsErro(true);
//             }
//         } else {
//             setMensagem('Preencha todas as informações.');
//             setIsErro(true);
//         }

//         setMostrarMensagem(true); // Mostrar mensagem após definir o estado

//         // Ocultar a mensagem após 5 segundos
//         setTimeout(() => {
//             setMostrarMensagem(false);
//         }, 5000); // Tempo em milissegundos
//     }

//     return (
//         <div id="scroll1">
//             <div className="container">
//                 <div className="form-wrapper">
//                         <img style={{padding: '0px', width:'50%'}} src={imagemcadastro} alt="img doação SangueBom" />
//                     <div style={{padding: '0px', width:'50%', height: 'auto'}} className="form">
//                         <h3 className="tit_cads">Seja Bem-vindo(a)!<br />Cadastre-se aqui:</h3>
//                         <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
//                         <input type="text" value={addNOME} onChange={handleChangeNome} placeholder="Nome Completo" />
//                         <input type="email" value={addEMAIL} onChange={handleChangeEmail} placeholder="Informe seu melhor email" />
//                         <input type="text" value={addTELEFONE} onChange={handleChangeTelefone} placeholder="Informe seu telefone" />
//                         <input type="password" value={addSENHA} onChange={handleChangeSenha} placeholder="Crie sua Senha de 8 dígitos" />
//                         <div className="date-container">
//                             <span>Data de Nascimento</span>
//                             <input type="date" value={addDATANASCIMENTO} onChange={handleChangeDataNascimento} />
//                         </div>
//                         <select value={addTIPOSANGUINEO} onChange={handleChangeTipoSanguineo}>
//                             <option value="">Selecione o Tipo Sanguíneo</option>
//                             <option value="A+">A+</option>
//                             <option value="A-">A-</option>
//                             <option value="B+">B+</option>
//                             <option value="B-">B-</option>
//                             <option value="AB+">AB+</option>
//                             <option value="AB-">AB-</option>
//                             <option value="O+">O+</option>
//                             <option value="O-">O-</option>
//                             <option value="não informado">Não Sei</option>
//                         </select>
//                         {loading && <div>Carregando Conteúdo...</div>}
//                         {!loading && <button className="btn_form" onClick={adicionarUsuarios}>Criar Cadastro</button>}
//                         {mostrarMensagem && (
//                             <div className={isErro ? "mensage mensage_erro" : "mensage mensage_sucesso"}>
//                                 {mensagem}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PageCadastro;


import '../style/style.css';

function PageCadastro() {
    TabTitle('Autenticação - Sangue Bom');
    
    // Estados para o toggle entre Login e Cadastro
    const [isLogin, setIsLogin] = useState(true);

    // Estados de Login
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [isErro, setIsErro] = useState(false);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    // Estados de Cadastro
    const [addNOME, setAddNome] = useState('');
    const [addEMAIL, setAddEmail] = useState('');
    const [addTELEFONE, setAddTelefone] = useState('');
    const [addSENHA, setAddSenha] = useState('');
    const [addDATANASCIMENTO, setAddDataNascimento] = useState('');
    const [addTIPOSANGUINEO, setAddTipoSanguineo] = useState('');

    // Funções de controle de campos de Login
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);

    // Funções de controle de campos de Cadastro
    const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => setAddNome(e.target.value);
    const handleChangeEmailCadastro = (e: ChangeEvent<HTMLInputElement>) => setAddEmail(e.target.value);
    const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => setAddTelefone(e.target.value);
    const handleChangeSenhaCadastro = (e: ChangeEvent<HTMLInputElement>) => setAddSenha(e.target.value);
    const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => setAddDataNascimento(e.target.value);
    const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => setAddTipoSanguineo(e.target.value);

    // Função de login
    const loginUsuario = async () => {
        if (email && senha) {
            try {
                setLoading(true);
                const sucesso = await ModuloApi.RealizarLogin(email, senha);
                setMensagem(sucesso ? 'Login realizado com sucesso!' : 'Email ou senha incorretos. Tente novamente.');
                setIsErro(!sucesso);
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

    // Função de cadastro
    const adicionarUsuarios = async () => {
        if (addNOME && addEMAIL && addTELEFONE && addSENHA && addDATANASCIMENTO && addTIPOSANGUINEO) {
            try {
                setLoading(true);
                const sucesso = await ModuloApi.AdicionarUsuario(
                    addNOME, addEMAIL, addTELEFONE, addSENHA, addDATANASCIMENTO, addTIPOSANGUINEO
                );
                setMensagem(sucesso ? 'Cadastro realizado com sucesso!' : 'Verifique os campos e tente novamente');
                setIsErro(!sucesso);
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
            <style>
                {`
                  .toggle-buttons {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                    top:0px;
                    
                }
                
                .toggle-buttons button {
                    margin: 0 10px;
                    padding: 10px 20px;
                    border: none;
                    cursor: pointer;
                    background-color: #f0f0f0;
                    transition: background-color 0.3s;
                }
                
                .toggle-buttons .active {
                    background:linear-gradient(180deg, #ff4d4d 0, #c40909);
                    color: white;
                }
                  
                 `}
            </style>
            <div className="container" style={{display: 'block', marginTop:'auto'}} >
            <div className="toggle-buttons">
                    <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Fazer Login</button>
                    <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Criar Cadastro</button>
                </div>
                <div className="form-wrapper">
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
