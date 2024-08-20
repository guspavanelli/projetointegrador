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
                        Editar Perfis <br />
                        <h4>Helena Hills</h4>
                             <div className="imgp"> <img src={ftPerfil} alt="foto perfil"/></div>

                     </div>





                             <div className="dados_perfil">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                    <div className="botao_vermelho">

                         </div>
                </div>




        </div>
    )
}

export default Perfil;