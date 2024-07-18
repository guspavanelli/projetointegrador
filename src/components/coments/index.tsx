import BotaoLike from "../buttons/like";
import BotaoCompartilhar from "../buttons/share";

function Comentarios(){
    return(
        <div className="container_coments">
            <div className="coments_one">
                <div className="coments_post">
                    <h3>Hemonúcleo de Bauru</h3>
                    <h6>Data da Postagem: 5min</h6>
                    <div className="coments_text">Precisamos de doação para um bebê chamado manuel, quem puder se encaminha ao hemonúcloo no 
                        endereço tal das 08h às 14h e das 15h às 18h  (-------)
                    </div>
                </div>
                <div className="buttons_one">
                    <div><BotaoLike/></div>
                    <div><BotaoCompartilhar/></div>
                </div>
            </div>
            <div id="linha"></div>
            <div className="coments_two">
                <div className="coments_post">
                    <h3>Maria Camila </h3>
                    <h6>Data da Postagem: 15min</h6>
                    <div className="coments_text">Precisamos de doação para João José, quem puder se encaminha ao hemonúcloo no
                        endereço tal das 08h às 14h e das 15h às 18h  (-------)
                    </div>
                </div>
                <div className="buttons_one">
                    <div><BotaoLike/></div>
                    <div><BotaoCompartilhar/></div>
                </div>
            </div>
            <div id="linha"></div>
            <div className="coments_three">
                <div className="coments_post">
                    <h3>Caio Castro</h3>
                    <h6>Data da Postagem: 15min</h6>
                    <div className="coments_text">Olá, estou apto doar sangue para doar caso alguém precise de
                        uma doação direcionada, só comentar o nome e local que eu irei. (-------)
                    </div>
                </div>
                <div className="buttons_one">
                    <div><BotaoLike/></div>
                    <div><BotaoCompartilhar/></div>
                </div>
            </div>
            <div id="linha"></div>
            <div className="coments_four">
                <div className="coments_post">
                    <h3>Postagens e mais postagens</h3>
                </div>
                <div className="buttons_one">
                    <div><BotaoLike/></div>
                    <div><BotaoCompartilhar/></div>
                </div>
            </div>
            <div id="linha"></div>
            <div className="coments_five">
                <div className="coments_post">
                    <h3>Carregar mais postagens é só descer</h3>
                </div>
                <div className="buttons_one">
                    <div><BotaoLike/></div>
                    <div><BotaoCompartilhar/></div>
                </div>
            </div>
    </div>
    )
}

export default Comentarios;