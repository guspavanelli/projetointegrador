
import BotaoLike from '../components/buttons/like';
import Cabecalho from '../components/cabecalho';
import Footer from '../components/footer';
import Comentarios from '../components/coments';
import '../style/style.css';
import { Link } from 'react-router-dom';
import BotaoCompartilhar from '../components/buttons/share';
import Linha from '../components/linha';
import { TabTitle } from '../components/GeneralFunctions/GeneralFunctions';

function Home(){
    TabTitle('Sangue Bom');
    return(
        <div className='home_container'>
            <Cabecalho/>
            <div className="home_posso_doar">
    
                <div className="home_pd_possodoar">
                    <h1>Posso doar?</h1>
                </div>
                <div className="home_pd_descubra">
                    <p>Faça o teste e descubra se você está apto para doação.</p>
                </div>
                <Link to="/teste">
                <div className="home_pd_teste">
                    <p>Teste</p>
                </div>
                </Link>
            </div>
            <div className='home_doadores'>
                <h2>Últimos Checkins</h2>
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
                            <div className='home_box_one_avatar'></div>
                            <div className='home_box_name'>    
                                <div>
                                    nome sobrenome
                                </div>
                                <h6>descrição</h6>
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
                            <div className='home_box_two_avatar'></div>
                            <div className='home_box_name'>    
                                <div>
                                    nome sobrenome
                                </div>
                                <h6>descrição</h6>
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
                            <div className='home_box_three_avatar'></div>
                            <div className='home_box_name'>    
                                <div>
                                    nome sobrenome
                                </div>
                                <h6>descrição</h6>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='home_mural_help'>
                <h2>Mural de Ajuda</h2>
                <div className='home_mural_dif'>
                Espaço de postagem para pedidos de
                doação de sangue e para canditos que querem doar.
                </div>
            </div>
            
            <div>
            <Comentarios/>
            </div>
            <div><Footer/></div>
            
        </div>
    )
}

export default Home;