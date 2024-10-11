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
            <br />
            <br />
            <div className="title_sobre">
            <h1>Sobre o sangue bom</h1>
            </div>            
            <CardList/>

            <div className="projeto-box">
        <h3>Sobre o Projeto: Sangue Bom</h3>
        <p>Sangue Bom é um projeto desenvolvido por alunos do curso de Desenvolvedor Full Stack do SENAC, com o objetivo de criar um site para incentivar a doação de sangue na cidade de Bauru. O site disponibiliza informações gerais sobre a doação de sangue, um teste de aptidão para doação, locais de doação, e um feed para postagens das instituições e usuários, possibilitando interação dentro do site e com redes sociais.</p>
        <br />
        <h3>Funcionalidades</h3>
        <p>- Informações Gerais sobre Doação: Seção dedicada a explicar o processo de doação de sangue, benefícios, requisitos e cuidados necessários.<br/>
        <br />
        - Teste de Aptidão para Doação: Ferramenta que permite ao usuário verificar se está apto a doar sangue com base em um questionário simples.<br/>
        <br />
        - Locais de Doação: Mapa e lista de locais onde é possível doar sangue na cidade de Bauru.<br/>
        <br />
        - Tabela de compatibilidade sanguínea: Funcionalidade que permite aos usuários interagir com um sistema que mostra as compatibilidades de doação e recepção de sangue para todos os tipos.</p>
        </div>
            
            
                        <br />
                        <br />


                        <div className="projeto-box1">
                        <br />
                        <h2>Ajude a manter o projeto e seja um membro Sangue Bom!
                        Faça sua doação via PIX para os seguintes dados:</h2>
                        <br />
                        <br />
                        <br />
                            <div className="pai_qr">
                                <div className="info_qr"> 
                                <h2>CNPJ: XXXXXXXXXXXXXXXXXXXX
                                <br />Nome: XXXXXXXXXXXXXXXXXXXX </h2> </div>
                                        <div className="sobre_qr_">
                                            <img className="qr_sb" src={QrCode} alt="qr code" /></div>
                            </div>
                        </div>

            
            <br />
            <br />

            <Footer/>
        </div>
    )
}

export default Sobre;