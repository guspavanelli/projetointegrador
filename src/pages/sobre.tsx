import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import Footer from "../components/footer";
import Cabecalho from "../components/cabecalho";

function Sobre(){
    TabTitle('Sobre - Sangue Bom')
    return(
        <div className="container_sobre_">
            <Cabecalho/>

            <div>

            <h1>Pagina Sobre</h1>
            <h3>Sangue bom é um site projetado em informar as pessoas sobre doações de sangue, onde doar, quem pode doar, locais de doação e tambem informativo a respeito.</h3>
            <br />

            <p>Criadores</p>
            
            
            <ul>
                <li>Alexandre, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                    porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                    não estava apto naquele momento</li>
                <li>Daniel, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                    porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                    não estava apto naquele momento</li>
                <li>Gabriel, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                    porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                    não estava apto naquele momento</li>
                <li>Gustavo, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                    porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                    não estava apto naquele momento</li>
                    
            </ul> 

            </div>
        <Footer/>
        </div>

    )
}

export default Sobre;