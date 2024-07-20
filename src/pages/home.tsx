
import Cabecalho from '../components/cabecalho';
import Footer from '../components/footer';
import Comentarios from '../components/coments';
import '../style/style.css';
import { Link } from 'react-router-dom';
import BotaoLike from '../components/buttons/like';

function Home(){
    return(
        <div className='home_container'>
            <Cabecalho/>
            <div className="home_posso_doar">
                <div className="home_pd_possodoar">
                    <h3>Posso doar?</h3>
                </div>
                <div className="home_pd_descubra">
                    <p>Faça o teste e descubra se você está apto para doação.</p>
                </div>
                <div className="home_pd_teste">
                    <Link to="/teste"><p>Teste</p></Link>
                </div>
            </div>
            <div className='home_doadores'>
                <h1>Últimos Checkins</h1>
                <div className='home_doadores_dif'>
                    Doadores que fizeram a diferença
                </div>
            </div>
            <div className='home_box_container'>
                <div className='home_box_one'>
                    <div>
                        <div>
                            <p>“Ninguém me avisou que doia ”</p>
                        </div> 
                        <div className='home_box_avatar_container'>
                            <div className='home_box_one_avatar'>
                            </div>
                            <div>    
                                <div>
                                    nome sobrenome
                                </div>
                                <div>
                                    descrição
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='home_box_two'>
                    <div>
                        <div>
                            <p>“Ninguém me avisou que doia ”</p>
                        </div> 
                        <div className='home_box_avatar_container'>
                            <div className='home_box_two_avatar'>
                            </div>
                            <div>    
                                <div>
                                    nome sobrenome
                                </div>
                                <div>
                                    descrição
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className='home_box_three'>
                    <div>
                        <div>
                            <p>“Ninguém me avisou que doia ”</p>
                        </div> 
                        <div className='home_box_avatar_container'>
                            <div className='home_box_three_avatar'>
                            </div>
                            <div>    
                                <div>
                                    nome sobrenome
                                </div>
                                <div>
                                    descrição
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='home_mural_help'>
                <h1>Mural de Ajuda</h1>
                <div className='home_mural_dif'>
                Espaço de postagem para pedidos de
                doação de sangue e para canditos que querem doar.
                </div>
            </div>
            <div>
            <Comentarios/>
            </div>

            <Footer/>

        </div>
    )
}

export default Home;