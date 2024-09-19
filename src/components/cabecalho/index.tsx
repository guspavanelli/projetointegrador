// import { Link } from "react-router-dom";
// import '../../style/style.css'
// import Linha from "../linha";
// import Botao from "../../components/buttons/login/index";

// function Cabecalho(){
//     return(
//         <div className="cab_container">
//             <Link className="cab_logo" to="/">
//             <div >
//                 SANGUE BOM
//             </div>
//                 </Link> 
//             <div className="cab_options">
//                 <Link className="cab_options_home"to="/locais"><div >Locais</div></Link>
//                 <Link className="cab_options_info"to="/info"><div>Informações</div></Link>
//                 <Link className="cab_options_sobre"to="/sobre"><div >Sobre</div></Link>
//             </div>
//             <Botao/>
//         </div>
//     )
// }

// export default Cabecalho;

import React from 'react';

const Cabecalho: React.FC = () => {
    const handleMenuToggle = () => {
        const menu = document.getElementById('menu-bit');
        if (menu) {
            menu.classList.toggle('active'); 
        }
    };

    return (
        <div id="header-fixed">
            <div className="container">
                <header id="header-bit">
                    <div className="header section" id="header">
                        <div className="widget Header">
                            <div className="header-widget">
                                <a className="show-menu" href="javascript:;" title="Show Menu" onClick={handleMenuToggle}>
                                    <i className="fas fa-bars"></i>
                                </a>
                                <a className="header-image-wrapper" href="/">
                                    <img 
                                        alt="logomarca SangueBom" 
                                        style={{ maxWidth: '50px', padding: '15px' }} 
                                        src="logo_sanguebom.png" 
                                        title="Logomarca SangueBom" 
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-bit" id="menu-bit">
                        <div className="menumobile-logo">
                            <img 
                                src="logo_sanguebom.png" 
                                title="logomarca SangueBom" 
                            />
                            <a className="close-menu" href="javascript:;" title="Close Menu" onClick={handleMenuToggle}>
                                <i className="fas fa-times"></i>
                            </a>
                        </div>
                        <div className="bit-nav section" id="bit-nav">
                            <div className="widget LinkList">
                                <nav id="bit-menu">
                                    <ul className="bitui">
                                        <li><a href="#empresa" title="Sobre Nós"><span>Sobre Nós</span></a></li>
                                        <li><a href="#informacoes" title="informacoes"><span>Informações</span></a></li>
                                        <li><a href="#accordion" title="FAQ"><span>FAQ</span></a></li>
                                        <li><a href="#contato" title="Contato"><span>Contato</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Cabecalho;
