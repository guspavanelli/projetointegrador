import Instagram from "../../assests/footer/instagram (2).png"
import Facebook from "../../assests/footer/facebook.png"
import Linkedin from "../../assests/footer/linkedin.png"
import Youtube from "../../assests/footer/youtube.png"
import { Link } from "react-router-dom"

function Footer(){
    return (
    <div className="footer_principal">
        <div className="footer_1">
            <h1 className="title_footer">Apoiadores</h1>
            <h2 className="subtitle_footer_flex1">Seja um Apoiador!</h2>
            <h4 className="subtitle_footer_flex1">Sobre o Sangue-Bom</h4>
        
        <div className="footer_img">
            <img src = {Instagram} alt="Instagram"/>
            <img src = {Facebook} alt="Facebook" />
            <img src= {Linkedin} alt="Linkedin" />
            <img src= {Youtube} alt="Youtube" />
        </div>
        </div>
        <div className="footer_2">
           <Link className="subtitle_footer" to = '/sobre'>Sobre nós</Link>
            <Link className="subtitle_footer" to='/sobre'>Contatos</Link>
            <Link className="subtitle_footer" to='/sobre'>Nossa História</Link>
        </div>
        <div className="footer_3">
            <Link className="subtitle_footer" to='/info'>Dúvidas frequentes</Link>
            <Link className="subtitle_footer" to='/teste'>Teste de Aptidão</Link>
            <Link className="subtitle_footer" to='/checkin'>Checkin</Link>
        </div>
        
    </div>
    )
}

export default Footer