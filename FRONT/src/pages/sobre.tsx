import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import Footer from "../components/footer";
import Cabecalho from "../components/cabecalho";
import QrCode from "../assests/qrcode.webp";
import '../style/style.css';
import CardList from "../components/card-carro-sobre/cardlist";

function Sobre(){
    TabTitle('Sobre - Sangue Bom')
    return(
        <div className="container_sobre_">
            <Cabecalho/>    
            <h1>Sobre o sangue bom</h1>
            <br />
            <h3>Sangue bom é um site projetado em informar as pessoas sobre doações de sangue, onde doar, quem pode doar, locais de doação e tambem informativo a respeito.</h3>
            <br />
            <h2>Criadores</h2>
            <CardList/>
            <ul>
                <li>Alexandre, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                    porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                    não estava apto naquele momento</li>
                    <br />
                    <li>Daniel, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                        porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                        não estava apto naquele momento</li>
                        <br />
                    <li>Gabriel, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                        porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                        não estava apto naquele momento</li>
                        <br />
                    <li>Gustavo, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                        porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                        não estava apto naquele momento.</li>
                        <br />
                        <br />
                        <div className="sobre_doacao_">
                        Ajude-nos e Seja um Sanguebom!
                        <br />
                        <br />
                        <h2>Ajude a manter o projeto e seja um membro Sangue Bom!
                        Faça sua doação via PIX para os seguintes dados:</h2>
                        <br />
                        <br />
                        <br />
                            <div className="pai_qr">
                                <div className="info_qr"> 
                                    <h2>CNPJ: XXXXXXXXXXXXXXXXXXXX Nome: XXXXXXXXXXXXXXXXXXXX </h2>
                                </div>
                                <div className="sobre_qr_">
                                    <img className="qr_sb" src={QrCode} alt="qr code" />
                                </div>
                            </div>
                        </div>
                </ul> 
                <h1>Contatos </h1>
                <br />
                <h2>Email: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h2>
                <h2>Telefone: xxxxxxxxxxxxxx</h2>
            <br />
            <Footer/>
        </div>
    )
}

export default Sobre;