import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css';
import ftPerfil from "../assests/usuario-de-perfil.png"
import Footer from "../components/footer";

function Perfil(){
    TabTitle('Perfil - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
                <div className="perfil_pr">
                    <div className="titulo_imagem_botaocertificado">
                        Editar Perfil
                         <br />
                        <h3>Helena Hills</h3>
                        <br />
                             <img className="imgp" src={ftPerfil} alt="foto perfil"/> <br />
                           <div id="Alterarfotodeperfil"> Alterar foto de perfil </div> 
                           <br />

                           <button id="btcertificado">Gerar Certificado</button>                                           
                     </div>


                             <div className="inputprincipalpf">



                                        <div className="inpf1">
                                        <h4>Username</h4>
                                        <input type="text" className="inputpf1" placeholder="Username"/> 
                                        </div>

                                        <br />


                                        <div className="inpf2">
                                            <h4>Email</h4>
                                            <input type="text" className="inputpf2" placeholder="Email@domain.com"/>
                                        </div>
                                            <br />

                                            <div className="inpf3">
                                            <h4>Bio</h4>
                                            <input type="text" className="inputpf3" placeholder="Insira sua Bio"/>
                                            </div>

                                                <br />



                                            <div className="inpf4">
                                            <h4>Histórico do Usuário</h4>
                                            <input type="text" className="inputpf4" placeholder="Doador desde 2016 fez 17 doações- celo ouro(não gerado)"/>
                                            </div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <button id="btsalvar">Salvar</button>
                                            <br />
                                            <br />



                            </div>

                </div>

                <Footer/>



        </div>
    )
}

export default Perfil;