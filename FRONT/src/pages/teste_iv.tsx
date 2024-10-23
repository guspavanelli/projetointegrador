import { ChangeEvent, useState } from "react";
import { ModuloApi } from "../api";


function Form_teste() {
  const [activePanel, setActivePanel] = useState<"login" | "criarConta">("login");

  const handleToggle = (panel: "login" | "criarConta"): void => {
    setActivePanel(panel);
  };

  const [addNOME, setAddNome] = useState('');
    const [addEMAIL, setAddEmail] = useState('');
    const [addTELEFONE, setAddTelefone] = useState('');
    const [addSENHA, setAddSenha] = useState('');
    const [addDATANASCIMENTO, setAddDataNascimento] = useState('');
    const [addTIPOSANGUINEO, setAddTipoSanguineo] = useState('');
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

    const adicionarUsuarios = async () => {
        if (addNOME && addEMAIL && addTELEFONE && addSENHA && addDATANASCIMENTO && addTIPOSANGUINEO) {
            try {
                const sucesso = await ModuloApi.AdicionarUsuario(
                    addNOME, 
                    addEMAIL, 
                    addTELEFONE, 
                    addSENHA, 
                    addDATANASCIMENTO, 
                    addTIPOSANGUINEO
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
    <div className="container">
      <style>
      {`
   .container-autenticacao {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #0003;
    margin: 8px auto;
    max-width: 100%;
    min-height: 480px;
    overflow: hidden;
    position: relative;
    width: 768px;
}

.container-autenticacao.active .logar-conta {
  transform: translateX(100%);
}

.logar-conta {
  left: 0;
  width: 50%;
  z-index: 2;
}

.form-container {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all .6s ease-in-out;
}
 
 
   
    `}
</style>



<div className="container-autenticacao">
        <div className={`form-container logar-conta ${activePanel === "login" ? "active" : ""}`} id="logarConta">
          <form>
            <h1 className="entrar">Entrar</h1>
            <div className="container-input">
              <input type="text" name="usuario-nome" placeholder="nome@email.com" required />
              <input type="password" name="usuario-senha" placeholder="*********" required />
            </div>
            <button type="button">Entrar</button>
            <a href="/esqueceu-senha">
              <label className="esqueceu-senha">Esqueceu a Senha?</label>
            </a>
            <span className="message-erro"></span>
            <span className="message-ok"></span>
          </form>
        </div>

        <div className={`form-container criar-conta ${activePanel === "criarConta" ? "active" : ""}`} id="criarConta">
          <form>
            <h1>CRIE SUA CONTA</h1>
            <div className="form-wrapper">
                    <div style={{padding: '0px', width:'50%', height: 'auto'}} className="form">
                        <h3 className="tit_cads">Seja Bem-vindo(a)!<br />Cadastre-se aqui:</h3>
                        <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
                        <input type="text" value={addNOME} onChange={handleChangeNome} placeholder="Nome Completo" />
                        <input type="email" value={addEMAIL} onChange={handleChangeEmail} placeholder="Informe seu melhor email" />
                        <input type="text" value={addTELEFONE} onChange={handleChangeTelefone} placeholder="Informe seu telefone" />
                        <input type="password" value={addSENHA} onChange={handleChangeSenha} placeholder="Crie sua Senha de 8 dígitos" />
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
                        {loading && <div>Carregando Conteúdo...</div>}
                        {!loading && <button className="btn_form" onClick={adicionarUsuarios}>Criar Cadastro</button>}
                        {mostrarMensagem && (
                            <div className={isErro ? "mensage mensage_erro" : "mensage mensage_sucesso"}>
                                {mensagem}
                            </div>
                        )}
                    </div>
                </div>
            <div className="aceitar-termos">
              <input type="checkbox" name="aceitar-termos-pf" />
              <label>aceitar os termos</label>
            </div>
            <button type="button">Cadastrar-Se</button>
            <span className="message-erro"></span>
            <span className="message-ok"></span>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left" onClick={() => handleToggle("login")}>
              <h1>Login</h1>
              <p>Se mantenha conectado fazendo login com suas informações</p>
            </div>
            <div className="toggle-panel toggle-right"><h3>Criar Sua Conta</h3><button type="button" className="hidden"> Criar Uma Conta </button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form_teste;


