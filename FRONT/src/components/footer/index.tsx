import Instagram from "../../assests/footer/instagram (2).png"
import Facebook from "../../assests/footer/facebook.png"
import Linkedin from "../../assests/footer/linkedin.png"
import Youtube from "../../assests/footer/youtube.png"
import { Link } from "react-router-dom"

function Footer(){
    return (
    <div className="footer_principal">
        <div className="footer_1">
           <Link className="title_footer" to= '/sobre'>Apoiadores</Link>
           <Link className="subtitle_footer_flex1" to = '/sobre'>Seja um Apoiador!</Link>
           <Link className="subtitle_footer_flex1" to = '/sobre'>Sobre o Sangue-Bom</Link>
        
        <div className="footer_img">
            <Link to='https://www.instagram.com/'><img src = {Instagram} alt="Instagram"/></Link>
            <Link to='https://www.facebook.com/'><img src = {Facebook} alt="Facebook" /></Link>
            <Link to='https://www.linkedin.com/'><img src= {Linkedin} alt="Linkedin" /></Link>
            <Link to='https://www.youtube.com/'><img src= {Youtube} alt="Youtube" /></Link>
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