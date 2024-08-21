import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css';
import ftPerfil from "../assests/usuario-de-perfil.png"

function Perfil(){
    TabTitle('Perfil - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
                <div className="perfil_pr">
                    <div className="titulo_imagem_botaocertificado">
                        Editar Perfis
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
                                   <input id="Username" type="text" className="inputpf1" placeholder="Username"/> 
                                </div>




                                <div>
                                    <h4>Email</h4>
                                    <input id="Username" type="text" className="inputpf2" placeholder="Email@domain.com"/>
                                </div>
                                <div></div>
                            </div>
                  
                </div>




        </div>
    )
}

export default Perfil;