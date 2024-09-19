import Cabecalho from "../components/cabecalho";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import '../style/style.css';
import ftPerfil from "../assests/usuario-de-perfil.png"
import Footer from "../components/footer";
import { ChangeEvent, useState } from "react";
import { Usuarios } from "../types/usuarios";



function Perfil() {
    const [usuarios, setUsuario] = useState<Usuarios[]>([])


    const [addTitulo, setAddTitulo] = useState('')
    const [addDetalhe, setAddDetalhe] = useState('')

    const HandleChangeTitulo = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitulo(e.target.value);

    }
    const HandleChangeDetalhe = (e: ChangeEvent<HTMLInputElement>) => {
        setAddDetalhe(e.target.value);
        //aa
    }

    const AdicionarUsuarios = async () => {
        if (addTitulo && addDetalhe) {

            let response = await fetch('http://localhost:3000/',

                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            title: addTitulo,
                            body: addDetalhe,
                            userID: 1
                        }
                    ),
                    headers: {
                        'Content-Type': 'applicatiom/json'

                    }
                }
            )
            let json = await response.json();

            console.log(json);

            if (json.id) {
                alert('Post Adicionado com sucesso')
                setUsuario((usuarios) => [...usuarios, json]);

            } else {
                alert('Ocorreu alguma falha.')
            }


        }

        else {
            alert('preencher as informações.')
        }

    }


    const carregarUsuarios = async () => {
        let response = await fetch('http://localhost:3000/');
        let json = await response.json();
        const Dados = Array.isArray(json) ? json : [json];
        setUsuario(Dados)
        alert('FOI')



    }






    TabTitle('Perfil - Sangue Bom')
    return (
        <div>
            <Cabecalho />
            <div className="perfil_pr">
                <div className="titulo_imagem_botaocertificado">
                    Editar Perfil
                    <br />
                    <h3>Helena Hills</h3>
                    <br />
                    <img className="imgp" src={ftPerfil} alt="foto perfil" /> <br />
                    <div id="Alterarfotodeperfil"> Alterar foto de perfil </div>
                    <br />

                    <button id="btcertificado">Gerar Certificado</button>
                </div>


                <div className="inputprincipalpf">



                    <div className="inpf1">
                        <h4>Username</h4>
                        <input type="text" className="inputpf1" placeholder="Username" onChange={HandleChangeTitulo} />
                        {addTitulo}
                    </div>

                    <br />


                    <div className="inpf2">
                        <h4>Email</h4>
                        <input type="text" className="inputpf2" placeholder="Email@domain.com" onChange={HandleChangeDetalhe} />
                    </div>
                    <br />

                    <div className="inpf3">
                        <h4>Bio</h4>
                        <input type="text" className="inputpf3" placeholder="Insira sua Bio" />
                    </div>

                    <br />



                    <div className="inpf4">
                        <h4>Histórico do Usuário</h4>
                        <input type="text" className="inputpf4" placeholder="Doador desde 2016 fez 17 doações- celo ouro(não gerado)" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <button id="btsalvar" onClick={carregarUsuarios}>Salvar</button>
                    <br />
                    MOSTRAR SALVO
                    {usuarios.map((item, index) => (
                        <div>
                            <h2>Dados usuario</h2>
                            Nome: {item.nome} <br /> <br />
                            User id: {item.userId}

                        </div>

                    ))}
                    <br />



                </div>

            </div>
            <br />
            <br />

            <Footer />



        </div>
    )
}

export default Perfil;