import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";

function Perfil(){
    TabTitle('Perfil - Sangue Bom')
    return(
        <div>
            <Cabecalho/>
                <div className="perfil_principal">
                    <div className="titulo_imagem_botaocertificado">
                        Editar Perfis <br />
                        <h4>Helena Hills</h4>

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