import Instagram from "../../assests/footer/instagram (2).png"
import Facebook from "../../assests/footer/facebook.png"
import Linkedin from "../../assests/footer/linkedin.png"
import Youtube from "../../assests/footer/youtube.png"

function Footer(){
    return (
    <div className="footer_principal">
        <div className="footer_1">
            <h1 className="title_footer">Apoiadores</h1>
            <h2 className="subtitle_footer">Seja um Apoiador!</h2>
            <h4 className="subtitle_footer">Sobre o Sangue-Bom</h4>
        <div>
            <img src = {Instagram} alt="Instagram"/>
            <img src = {Facebook} alt="Facebook" />
            <img src= {Linkedin} alt="Linkedin" />
            <img src= {Youtube} alt="Youtube" />
        </div>
        </div>
        <div className="footer_2">
            <h2 className="subtitle_footer">Sobre nós</h2>
            <h4 className="subtitle_footer">Contatos</h4>
            <h4 className="subtitle_footer">Nossa História</h4>
        </div>
        <div className="footer_3">
            <h2 className="subtitle_footer">Dúvidas frequentes</h2>
            <h4 className="subtitle_footer">Teste de Aptidão</h4>
            <h4 className="subtitle_footer">Chekin</h4>
        </div>
        
    </div>
    )
}

export default Footer