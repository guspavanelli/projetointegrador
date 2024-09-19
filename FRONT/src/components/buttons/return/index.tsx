import { Link } from "react-router-dom";
import imagemReturn from '../../../assests/arrowhead-up.png'


function BotaoReturn(){
    return(
        <div className="botao_return_principal">
            <Link to="/" ><img className="imagem_botao_return" 
            src={imagemReturn} alt="Botão de ajuda" /></Link>
        </div>
    )
}

export default BotaoReturn;