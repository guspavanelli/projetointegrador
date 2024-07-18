import Cablogcad from "../components/cabecalho-log-cad";
import imagemcadastro from "../assests/imagem cadastro.jpg"


function PageCadastro(){
    return(
    <div className="g">
        <Cablogcad/>
        <div className="pai_componentes_loginecad">
            <div className="molde_imagem_logecad">
                <img className="imagem_loginecad" src={imagemcadastro} alt="imagem página de cadastro" />
            </div>
            <div className="molde_form_login">
                
            </div>
        </div>
    </div>
    )
}

export default PageCadastro;