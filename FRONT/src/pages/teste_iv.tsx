// // import { ChangeEvent, useState } from "react";
// // import { ModuloApi } from "../api";

// // function Form_teste() {
// //   const [activePanel, setActivePanel] = useState<"login" | "criarConta">("login");

// //   const handleToggle = (panel: "login" | "criarConta"): void => {
// //     setActivePanel(panel);
// //   };

// //   const [addNOME, setAddNome] = useState('');
// //   const [addEMAIL, setAddEmail] = useState('');
// //   const [addTELEFONE, setAddTelefone] = useState('');
// //   const [addSENHA, setAddSenha] = useState('');
// //   const [addDATANASCIMENTO, setAddDataNascimento] = useState('');
// //   const [addTIPOSANGUINEO, setAddTipoSanguineo] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [mensagem, setMensagem] = useState('');
// //   const [isErro, setIsErro] = useState(false);
// //   const [mostrarMensagem, setMostrarMensagem] = useState(false);

// //   const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
// //     setAddNome(e.target.value);
// //   };

// //   const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
// //     setAddEmail(e.target.value);
// //   };

// //   const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => {
// //     setAddTelefone(e.target.value);
// //   };

// //   const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
// //     setAddSenha(e.target.value);
// //   };

// //   const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => {
// //     setAddDataNascimento(e.target.value);
// //   };

// //   const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => {
// //     setAddTipoSanguineo(e.target.value);
// //   };

// //   const adicionarUsuarios = async () => {
// //     if (addNOME && addEMAIL && addTELEFONE && addSENHA && addDATANASCIMENTO && addTIPOSANGUINEO) {
// //       try {
// //         const sucesso = await ModuloApi.AdicionarUsuario(
// //           addNOME, 
// //           addEMAIL, 
// //           addTELEFONE, 
// //           addSENHA, 
// //           addDATANASCIMENTO, 
// //           addTIPOSANGUINEO
// //         );
// //         console.log(sucesso);
// //         if (sucesso) {
// //           setMensagem('Cadastro realizado com sucesso❣️');
// //           setIsErro(false);
// //         } else {
// //           setMensagem('Verifique os campos e tente novamente');
// //           setIsErro(true);
// //         }
// //       } catch (error) {
// //         console.error("Erro ao adicionar usuário:", error);
// //         setMensagem('Algo deu errado. Recarregue a página e tente novamente');
// //         setIsErro(true);
// //       }
// //     } else {
// //       setMensagem('Preencha todas as informações.');
// //       setIsErro(true);
// //     }

// //     setMostrarMensagem(true);

// //     setTimeout(() => {
// //       setMostrarMensagem(false);
// //     }, 5000);
// //   };

// //   return (
// //     <div className="container">
// //       <style>
// //         {`
// //           .container-autenticacao {
// //             background-color: #fff;
// //             border-radius: 10px;
// //             box-shadow: 0 0 10px #0003;
// //             margin: 8px auto;
// //             max-width: 100%;
// //             min-height: 480px;
// //             overflow: hidden;
// //             position: relative;
// //             width: 768px;
// //           }
// //           .container-autenticacao.active .logar-conta {
// //             transform: translateX(100%);
// //           }
// //           .logar-conta {
// //             left: 0;
// //             width: 50%;
// //             z-index: 2;
// //           }
// //           .form-container {
// //             height: 100%;
// //             position: absolute;
// //             top: 0;
// //             transition: all .6s ease-in-out;
// //           }
// //           .container-autenticacao form {
// //             align-items: center;
// //             background-color: #fff;
// //             display: flex;
// //             flex-direction: column;
// //             height: 100%;
// //             justify-content: center;
// //             padding: 0 20px;
// //           }
// //           .form-container h1.entrar {
// //             position: relative;
// //             top: 27px;
// //           }
// //           .form-container h1 {
// //             color: #535353;
// //             font-size: 14px;
// //           }
// //           .form-container img {
// //             object-fit: cover;
// //             position: relative;
// //             top: 15px;
// //             width: 240px;
// //           }
// //           .container-input {
// //             position: relative;
// //           }
// //           .container-autenticacao input {
// //             background-color: #eee;
// //             border: 1px solid #0000;
// //             border-radius: 8px;
// //             font-size: 13px;
// //             margin: 3px 0;
// //             outline: none;
// //             padding: 10px 4px;
// //             width: 100%;
// //           }
// //           .container-autenticacao button {
// //             background-color: #4b8a40;
// //             border: 1px solid #0000;
// //             border-radius: 10px;
// //             color: #fff;
// //             cursor: pointer;
// //             font-size: 12px;
// //             font-weight: 700;
// //             letter-spacing: .5px;
// //             margin-top: 10px;
// //             padding: 10px 45px;
// //             text-transform: uppercase;
// //           }
// //           .container-input img {
// //             cursor: pointer;
// //             left: 90%;
// //             position: absolute;
// //             top: 65%;
// //             width: 20px;
// //           }
// //           .form-container label.esqueceu-senha {
// //             color: #535353;
// //             cursor: pointer;
// //             font-size: x-small;
// //             margin: 3px;
// //             text-align: center;
// //           }
// //           .message-erro, .message-ok {
// //             font-size: x-small;
// //             margin-top: 2px;
// //           }
// //           .message-erro {
// //             color: red;
// //           }
// //           .criar-conta {
// //             left: 0;
// //             opacity: 0;
// //             width: 50%;
// //             z-index: 1;
// //           }
// //           .aceitar-termos {
// //             align-items: center;
// //             display: flex;
// //             flex-direction: row;
// //             justify-content: center;
// //             margin: 8px;
// //             width: 100%;
// //           }
// //           .toggle-container {
// //             border-radius: 150px 0 0 100px;
// //             height: 100%;
// //             left: 50%;
// //             overflow: hidden;
// //             position: absolute;
// //             top: 0;
// //             transition: all .6s ease-in-out;
// //             width: 50%;
// //             z-index: 1000;
// //           }
// //           .toggle {
// //             background: #2968b1;
// //             background: linear-gradient(90deg,#53a3ff,#2968b1);
// //             background-size: cover;
// //             color: #fff;
// //             height: 100%;
// //             left: -100%;
// //             position: relative;
// //             transform: translateX(0);
// //             transition: all .6ss ease-in-out;
// //             width: 200%;
// //           }
// //           .toggle-left {
// //             transform: translateX(-200%);
// //           }
// //           .toggle-panel {
// //             align-items: center;
// //             display: flex;
// //             flex-direction: column;
// //             height: 100%;
// //             justify-content: center;
// //             padding: 0;
// //             position: absolute;
// //             text-align: center;
// //             top: 0;
// //             transform: translateX(0);
// //             transition: all .6s ease-in-out;
// //             width: 50%;
// //           }
// //           .container-autenticacao button.hidden {
// //             background-color: initial;
// //             border-color: #fff;
// //           }
// //           .toggle-right {
// //             right: 0;
// //           }
// //           .container-autenticacao.active .toggle-left, .toggle-right {
// //             transform: translateX(0);
// //           }
// //           .container, .container-img {
// //             min-height: 100vh;
// //           }
// //           .container-autenticacao.active #login-form {
// //             transform: translateX(100%);
// //           }
// //           .container-autenticacao.active #signup-form {
// //             transform: translateX(-100%);
// //           }
// //         `}
// //       </style>

// //       <div className="container-autenticacao">
// //         <div className={`form-container logar-conta ${activePanel === "login" ? "active" : ""}`} id="logarConta">
// //           <form>
// //             <h1 className="entrar">Entrar</h1>
// //             <div className="container-input">
// //               <input type="text" name="usuario-nome" placeholder="nome@email.com" required />
// //               <input type="password" name="usuario-senha" placeholder="*********" required />
// //             </div>
// //             <button type="button">Entrar</button>
// //             <a href="/esqueceu-senha">
// //               <label className="esqueceu-senha">Esqueceu a Senha?</label>
// //             </a>
// //             <span className="message-erro"></span>
// //             <span className="message-ok"></span>
// //           </form>
// //         </div>

// //         <div className={`form-container criar-conta ${activePanel === "criarConta" ? "active" : ""}`} id="criarConta">
// //           <form>
// //             <h1>CRIE SUA CONTA</h1>
// //             <div className="form-wrapper">
// //               <div style={{padding: '0px', width:'50%', height: 'auto'}} className="form">
// //                 <div className="input-wrapper" style={{width: '100%'}}>
// //                   <label htmlFor="nome">Nome completo</label>
// //                   <input
// //                     value={addNOME}
// //                     onChange={handleChangeNome}
// //                     type="text"
// //                     name="nome"
// //                     required
// //                     placeholder="Seu nome"
// //                   />
// //                 </div>

// //                 <div className="input-wrapper" style={{width: '100%'}}>
// //                   <label htmlFor="dataNascimento">Data de nascimento</label>
// //                   <input
// //                     value={addDATANASCIMENTO}
// //                     onChange={handleChangeDataNascimento}
// //                     type="date"
// //                     name="dataNascimento"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div style={{padding: '0px', width:'50%', height: 'auto'}} className="form">
// //                 <div className="input-wrapper" style={{width: '100%'}}>
// //                   <label htmlFor="email">Email</label>
// //                   <input
// //                     value={addEMAIL}
// //                     onChange={handleChangeEmail}
// //                     type="text"
// //                     name="email"
// //                     required
// //                     placeholder="Seu email"
// //                   />
// //                 </div>

// //                 <div className="input-wrapper" style={{width: '100%'}}>
// //                   <label htmlFor="telefone">Telefone</label>
// //                   <input
// //                     value={addTELEFONE}
// //                     onChange={handleChangeTelefone}
// //                     type="text"
// //                     name="telefone"
// //                     required
// //                     placeholder="Seu telefone"
// //                   />
// //                 </div>
// //               </div>

// //               <div style={{padding: '0px', width:'100%', height: 'auto'}} className="form">
// //                 <div className="input-wrapper" style={{width: '100%'}}>
// //                   <label htmlFor="senha">Senha</label>
// //                   <input
// //                     value={addSENHA}
// //                     onChange={handleChangeSenha}
// //                     type="password"
// //                     name="senha"
// //                     required
// //                     placeholder="Sua senha"
// //                   />
// //                 </div>

// //                 <div className="input-wrapper" style={{width: '100%'}}>
// //                   <label htmlFor="tipoSanguineo">Tipo sanguíneo</label>
// //                   <select
// //                     value={addTIPOSANGUINEO}
// //                     onChange={handleChangeTipoSanguineo}
// //                     required
// //                     name="tipoSanguineo"
// //                   >
// //                     <option value="">Selecionar</option>
// //                     <option value="A+">A+</option>
// //                     <option value="A-">A-</option>
// //                     <option value="B+">B+</option>
// //                     <option value="B-">B-</option>
// //                     <option value="O+">O+</option>
// //                     <option value="O-">O-</option>
// //                     <option value="AB+">AB+</option>
// //                     <option value="AB-">AB-</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="aceitar-termos">
// //               <input
// //                 className="form-check-input"
// //                 type="checkbox"
// //                 name="aceitar-termos"
// //                 required
// //               />
// //               <label htmlFor="aceitar-termos">
// //                 Eu concordo com os Termos de Serviço e a Política de Privacidade.
// //               </label>
// //             </div>
// //             <button type="button" onClick={adicionarUsuarios}>Criar conta</button>
// //             <span className={`message-${isErro ? "erro" : "ok"}`}>{mensagem}</span>
// //           </form>
// //         </div>

// //         <div className="toggle-container">
// //           <div className={`toggle ${activePanel === "login" ? "" : "toggle-left"}`}>
// //             <div className="toggle-panel toggle-right">
// //               <h1>Bem-vindo de volta!</h1>
// //               <p>Para se manter conectado, faça login com suas informações pessoais.</p>
// //               <button className="hidden" onClick={() => handleToggle("login")}>
// //                 Entrar
// //               </button>
// //             </div>

// //             <div className="toggle-panel toggle-left">
// //               <h1>Oi, amigo!</h1>
// //               <p>Insira suas informações pessoais e comece sua jornada conosco.</p>
// //               <button className="hidden" onClick={() => handleToggle("criarConta")}>
// //                 Criar Conta
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Form_teste;
// import { ChangeEvent, useState } from "react";
// import { ModuloApi } from "../api";
// import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
// import imagemcadastro from "../assests/imagem cadastro.jpg"; 

// import '../style/style.css';

// function PageLogin() {
//     TabTitle('Login - Sangue Bom');
    
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [mensagem, setMensagem] = useState('');
//     const [isErro, setIsErro] = useState(false);
//     const [mostrarMensagem, setMostrarMensagem] = useState(false);

//     const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     }

//     const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
//         setSenha(e.target.value);
//     }

//     const loginUsuario = async () => {
//         if (email && senha) {
//             try {
//                 setLoading(true);
//                 const sucesso = await ModuloApi.RealizarLogin(email, senha);
//                 console.log(sucesso);
//                 if (sucesso) {
//                     setMensagem('Login realizado com sucesso!');
//                     setIsErro(false);
//                 } else {
//                     setMensagem('Email ou senha incorretos. Tente novamente.');
//                     setIsErro(true);
//                 }
//             } catch (error) {
//                 console.error("Erro ao fazer login:", error);
//                 setMensagem('Algo deu errado. Recarregue a página e tente novamente.');
//                 setIsErro(true);
//             } finally {
//                 setLoading(false);
//             }
//         } else {
//             setMensagem('Preencha todas as informações.');
//             setIsErro(true);
//         }

//         setMostrarMensagem(true);

//         setTimeout(() => {
//             setMostrarMensagem(false);
//         }, 5000);
//     }

//     return (
//         <div id="scroll1">
//             <div className="container">
//                 <div className="form-wrapper">
//                     <img style={{padding: '0px', width:'50%'}} src={imagemcadastro} alt="img doação SangueBom" />
//                     <div style={{padding: '0px', width:'50%', height: 'auto'}} className="form">
//                         <h3 className="tit_cads">Bem-vindo de volta!</h3>
//                         <p className="sub_tit_cads">Digite seu email e senha para entrar:</p>
//                         <input type="email" value={email} onChange={handleChangeEmail} placeholder="Informe seu email" />
//                         <input type="password" value={senha} onChange={handleChangeSenha} placeholder="Digite sua senha" />
//                         {loading && <div>Carregando...</div>}
//                         {!loading && <button className="btn_form" onClick={loginUsuario}>Entrar</button>}
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

// export default PageLogin;
import { ChangeEvent, useState } from "react";
import { ModuloApi } from "../api";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import imagemcadastro from "../assests/imagem cadastro.jpg";
import '../style/style.css';

function PageAuth() {
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
            <div className="container" style={{display: 'block'}} >
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

export default PageAuth;


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



// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Erro404 from './pages/erro404';
// import Home from './pages/home';
// import Checkin from './pages/checkin';
// import Locais from './pages/locais';
// import PageCadastro from './pages/page_cadastro';
// import PageLogin from './pages/page_login';
// import Perfil from './pages/perfil';
// import Sobre from './pages/sobre';
// import Teste from './pages/teste';
// import Cabecalho from './components/cabecalho';
// import Form_teste from './pages/teste_iv';


// function App() {
//   return (
//     <div className='container_body'>
//       <Routes>
//         <Route path='*' element={<Erro404/>}>
//         </Route>      
//         <Route path='/' element={<Home/>}>
//         </Route>
//         <Route path='/checkin' element={<Checkin/>}>
//         </Route>
//         <Route path='/locais' element={<Locais/>}>
//         </Route>
//         <Route path='/pagecadastro' element={<PageCadastro/>}>
//         </Route>
//         <Route path='/pagelogin' element={<PageLogin/>}>
//         </Route>
//         <Route path='/checkin' element={<Checkin/>}>
//         </Route>
//         <Route path='/perfil' element={<Perfil/>}>
//         </Route>
//         <Route path='/sobre' element={<Sobre/>}>
//         </Route>
//         <Route path='/teste' element={<Teste/>}>
//         </Route> 
//         <Route path='/form_teste' element={<Form_teste/>}>
//         </Route>     
//       </Routes> 
//     </div>
//   );
// }

// export default App;