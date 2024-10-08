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
            
            <p>Criadores</p>
            <CardList/>
            
            <ul>
                <li>Alexandre, gosto muito de esportes e computadores, comecei o curso com o objetivo de fazer um site para minha
                    mei de camisas de time e tambem por ser uma área que tem um grande mercado de trabalho que eu pretendo seguir ...

                </li>
                    <br />

                    <li>Daniel, atualmente analistas de dados, comecei o curso por conta de gostar da área e querer se aprofundar cada vez mais no segmento,
                        aproveitando o crescimento da área e a oportunidade de conhecimento que o Senac proporcionou...
                    </li>
                        <br />

                    <li>Gabriel, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                        porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                        não estava apto naquele momento</li>
                        <br />


                    <li>Hyan, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                        porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                        não estava apto naquele momento.</li>
                        <br/>

                        <li>Ivan, 25 anos e nunca doou sangue, certo dia me bateu a curiosidade e coragem para fazer a doação
                        porem não achava informações faceis de como e onde realizar, então fui atras e descobri que 
                        não estava apto naquele momento.</li>
                        <br />
                        <br />


                        <div className="sobre_doacao_">
                        Ajude-nos e Seja um Sanguebom!
                        <br />
                        <h2>Ajude a manter o projeto e seja um membro Sangue Bom!
                        Faça sua doação via PIX para os seguintes dados:</h2>
                        <br />
                        <br />
                        <br />

                            <div className="pai_qr">
                                <div className="info_qr"> <h2>CNPJ: XXXXXXXXXXXXXXXXXXXX Nome: XXXXXXXXXXXXXXXXXXXX </h2> </div>
                                        <div className="sobre_qr_">
                                            <img className="qr_sb" src={QrCode} alt="qr code" /></div>
                            </div>
                        </div>
                </ul> 

                <h1>Contatos </h1>
                <br />
                Hemonúcleo: (14) 3231-4771
                <br />
                Endereço: R. Monsenhor Claro, 8-88 - Centro, Bauru - SP, 17015-130
                <br />
                sau.hb@famesp.org.br
                <br />
                <br />
                Beneficiencia Portuguesa: (14)3223-6933
                <br />
                Endereço: Rua Rio Branco, 13-83 Centro Bauru, SP, CEP 17015-311
                <br />
                contato@benebauru.com.br
                <br />


            
            <br />
            <br />

        



            <Footer/>
            
        </div>
    )
}

export default Sobre;