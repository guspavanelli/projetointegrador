import HospitalBase from "../../assests/locais/logo_hospital de base.png"
import Hemovida from "../../assests/locais/logo_hemovida.jpg"
import Famesp from "../../assests/locais/logo famesp.png"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import BotaoLocal from "../buttons/local";

function Divlocal(){
    return(
    <div className="locais_Pai">
        <div className="locais_1">
            <div className="img_locais">
                <img className="img_img_locais" src={Famesp} alt="Famesp" />
            </div>
            
            <div className="desc_locais">
            <h3 className="h3_locais">Hemonucleo Hospital de Base</h3>
            <p className="paragrafo_loc">O Hemonúcleo oferece a opção de agendamento  para doação de sangue,
                 pelo telefone: (14) 3231-4771, no horário de atendimento do Hemonúcleo,
                que continua recebendo doadores de segunda-feira a sexta-feira, das 7h às 13h,
                 e aos sábados, das 7h às 12h</p>
            </div>
            <div className="but_locais">
                <BotaoLocal/>
                <div>
                </div>
            </div>
        </div>

        <br />

        <div className="locais_2">
        <div className="img_locais">
            <img className="img_img_locais" src={Hemovida} alt="Hemovida" />
            </div>
            <div className="desc_locais">
                <h3 className="h3_locais">Hemovida</h3>
                <p className="paragrafo_loc">
Se preferir, é possível agendar horário para fazer a doação. Basta ligar para 3223-6933 ou 3208-4561. Ou entrar em contato pelo Whatsapp (14) 99770- 5078.
Horário : das 7h às 12h ou das 13h30 às 16h Aos sábados: das 8h às 12h
Com estacionamento próprio!</p>
            </div>
            <div className="but_locais">
                <BotaoLocal/>
                <div>
                    
                </div>
            </div>

        </div>
    </div>
    )
}
export default Divlocal;