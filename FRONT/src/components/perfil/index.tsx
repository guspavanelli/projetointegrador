// import { ChangeEvent } from "react";
// import Ale from '../../assests/fotos.colab/lekos.png';
// import './perfil.css';
// import Header from "../header";
// import Footer from "../footer";
// import ExpandablePopup from "../buttons/botaoajuda";
// import { TabTitle } from "../GeneralFunctions/GeneralFunctions";

// // Interface para definir as props
// interface PerfilProps {
//     nome: string;
//     alterarNome: (novoNome: string) => void;
// }

// function Perfil({ nome, alterarNome }: PerfilProps) {
//     TabTitle('Perfil - Sangue Bom');

//     const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
//         alterarNome(e.target.value); // Atualiza o nome ao digitar
//     };

//     return (
//         <div className="home_container1">
//             <Header/>
//             <h1>Perfil</h1>
//             <div className="perfil_pr">
//                 <div className="titulo_imagem_botaocertificado">
//                     <h3>{nome}</h3> {/* Exibe o nome dinamicamente */}
//                     <img className="imgp" src={Ale} alt="foto perfil"/>
//                     <div id="Alterarfotodeperfil">Alterar foto de perfil</div>
//                     <button id="btcertificado">Editar Perfil</button>
//                 </div>

//                 <div className="inputprincipalpf">
//                     <div className="inpf1">
//                         <h4>Nome</h4>
//                         <input 
//                             type="text" 
//                             value={nome} 
//                             onChange={handleNomeChange} 
//                             placeholder="Digite seu nome"
//                         />
//                     </div>

//                     <div className="inpf2">
//                         <h4>Email</h4>
//                         <input type="text" className="inputpf2" placeholder="Email@domain.com" />
//                     </div>

//                     <div className="inpf3">
//                         <h4>Bio</h4>
//                         <input type="text" className="inputpf3" placeholder="Insira sua Bio" />
//                     </div>

//                     <div className="inpf4">
//                         <h4>Histórico do Usuário</h4>
//                         <input 
//                             type="text" 
//                             className="inputpf4" 
//                             placeholder="Doador desde 2016 fez 17 doações - selo ouro (não gerado)" 
//                         />
//                     </div>

//                     <button id="btsalvar">Salvar</button>
//                 </div>
//             </div>
//             <Footer />
//             <ExpandablePopup />
//         </div>
//     );
// }

// export default Perfil;


import { ChangeEvent } from "react";
import Ale from '../../assests/fotos.colab/lekos.png';
import './perfil.css';
import Header from "../header";
import Footer from "../footer";
import ExpandablePopup from "../buttons/botaoajuda";
import { TabTitle } from "../GeneralFunctions/GeneralFunctions";
import { useDoador } from '../../context/DoadorContext';  // Importe o hook do contexto

// Interface para definir as props


function Perfil() {
    TabTitle('Perfil - Sangue Bom');

    const { doador } = useDoador();  // Acesse os dados do doador

    if (!doador) {
        return <p>Carregando...</p>;  // Caso os dados ainda não estejam disponíveis
    }

    
    return (
        <div className="home_container1">
            <Header />
            <h1>Perfil</h1>
            <div className="perfil_pr">
                <div className="titulo_imagem_botaocertificado">
                    <h3>{doador.NOME}</h3> {/* Exibe o nome do doador */}
                    <img className="imgp" src={Ale} alt="foto perfil" />
                    <div id="Alterarfotodeperfil">Alterar foto de perfil</div>
                    <button id="btcertificado">Editar Perfil</button>
                </div>

                <div className="inputprincipalpf">
                    <div className="inpf1">
                        <h4>Nome</h4>
                        <input 
                            type="text" 
                            value={doador.NOME} 
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div className="inpf2">
                        <h4>Email</h4>
                        <input 
                            type="text" 
                            className="inputpf2" 
                            value={doador.EMAIL} 
                            placeholder="Email@domain.com" 
                        />
                    </div>

                    <div className="inpf3">
                        <h4>Bio</h4>
                        <input 
                            type="text" 
                            className="inputpf3" 
                            placeholder="Insira sua Bio" 
                        />
                    </div>

                    <div className="inpf4">
                        <h4>Histórico do Usuário</h4>
                        <input 
                            type="text" 
                            className="inputpf4" 
                            placeholder="Doador desde 2016 fez 17 doações - selo ouro (não gerado)" 
                        />
                    </div>

                    <div className="inpf5">
                        <h4>Telefone</h4>
                        <input 
                            type="text" 
                            className="inputpf5" 
                            value={doador.TELEFONE} 
                            readOnly 
                        />
                    </div>

                    <div className="inpf6">
                        <h4>Data de Nascimento</h4>
                        <input 
                            type="text" 
                            className="inputpf6" 
                            value={doador.DATANASCIMENTO} 
                            readOnly 
                        />
                    </div>

                    <div className="inpf7">
                        <h4>Tipo Sanguíneo</h4>
                        <input 
                            type="text" 
                            className="inputpf7" 
                            value={doador.TIPOSANGUINEO} 
                            readOnly 
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
