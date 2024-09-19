import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css'
function Info(){
    TabTitle('Informações Gerais - Sangue Bom')
    return(
        <div className="info_container">
            <Cabecalho/>
            <hr/>   
            <hr/>
            <hr/>
            <div className="info_title">
                <h1>Pagina Info</h1>
                <div>
                    <p>Requisitos básicos para doação de sangue</p>
                </div>
            </div>
            <div className="info_container_conteudo">
                <div className="info_box_one">
                    <div className="info_box_title">
                        TITULO
                    </div>
                    <div className="info_box_cont">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quidem mollitia nesciunt 
                        corrupti earum nemo consectetur repellat
                         quis necessitatibus corporis cupiditate.
                    </div>
                </div>
                <div className="info_box_two">
                    <div className="info_box_title">
                        TITULO
                    </div>
                    <div className="info_box_cont">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quidem mollitia nesciunt 
                        corrupti earum nemo consectetur repellat
                         quis necessitatibus corporis cupiditate.
                    </div>
                </div>
                <div className="info_box_three">
                    <div className="info_box_title">
                        TITULO
                    </div>
                    <div className="info_box_cont">
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quidem mollitia nesciunt 
                        corrupti earum nemo consectetur repellat
                         quis necessitatibus corporis cupiditate.
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Info;