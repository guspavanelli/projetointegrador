import { ChangeEvent } from "react";
import Ale from '../assests/fotos.colab/lekos.png';
import './perfil.css';
import Header from "../header";
import Footer from "../footer";
import ExpandablePopup from "../buttons/botaoajuda";
import { TabTitle } from "../GeneralFunctions/GeneralFunctions";

// Interface para definir as props
interface PerfilProps {
    nome: string;
    alterarNome: (novoNome: string) => void;
}

function Perfil({ nome, alterarNome }: PerfilProps) {
    TabTitle('Perfil - Sangue Bom');

    const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
        alterarNome(e.target.value); // Atualiza o nome ao digitar
    };

    return (
        <div className="home_container1">
            <Header/>
            <div className="perfil_pr">
                <div className="titulo_imagem_botaocertificado">
                    <h3>{nome}</h3> {/* Exibe o nome dinamicamente */}
                    <img className="imgp"  alt="foto perfil" />
                    <div id="Alterarfotodeperfil">Alterar foto de perfil</div>
                    <button id="btcertificado">Gerar Certificado</button>
                </div>

                <div className="inputprincipalpf">
                    <div className="inpf1">
                        <h4>Nome</h4>
                        <input 
                            type="text" 
                            value={nome} 
                            onChange={handleNomeChange} 
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div className="inpf2">
                        <h4>Email</h4>
                        <input type="text" className="inputpf2" placeholder="Email@domain.com" />
                    </div>

                    <div className="inpf3">
                        <h4>Bio</h4>
                        <input type="text" className="inputpf3" placeholder="Insira sua Bio" />
                    </div>

                    <div className="inpf4">
                        <h4>Histórico do Usuário</h4>
                        <input 
                            type="text" 
                            className="inputpf4" 
                            placeholder="Doador desde 2016 fez 17 doações - selo ouro (não gerado)" 
                        />
                    </div>

                    <button id="btsalvar">Salvar</button>
                </div>
            </div>
            <Footer />
            <ExpandablePopup />
        </div>
    );
}

export default Perfil;
