import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cabecalho from '../components/cabecalho';
import Footer from '../components/footer'; 
import BloodTypeSelector from "../components/buttons/botaoflutuante";
import ExpandablePopup from '../components/buttons/botaoajuda';
import DonationLocation from '../components/Locais_home';
import hemonucleob from '../assests/locais/logo famesp.png'
import hemonucleop from '../assests/locais/logo_hemovida.jpg'
import { TabTitle } from '../components/GeneralFunctions/GeneralFunctions';
import imagemteste from "../assests/imagem login.jpg"; 
import imagemcadastro from "../assests/imagem cadastro.jpg"; 
import { Usuarios } from "../types/usuarios";
import { ModuloApi } from "../api";
import Teste from "./teste";
import PageCadastro from "./page_cadastro";
import Carousel from "../components/carrossel";
import FAQ from "../components/FAQ";
import Header from "../components/header";
import Botaopagedawn from "../components/buttons/botaopagedawn/Scroll";

function Home() {
    TabTitle('Home - Sangue Bom');

    const questions = [
        {
          question: (
            <>
              Caso você seja doador(a), verifique se você já cumpriu os intervalos entre doações:
              <ul>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Homem - 60 dias (no máx. 4 doações/ano)</li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Mulher - 90 dias (no máx. 3 doações/ano)</li>
              </ul>
            </>
          ),
          options: ["Sim", "Não"],
        },
        {
          question: (
            <>
              <ul>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você tem entre 16 e 69 anos? </li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> E está em boas condições de saúde? </li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Sem ingerir bebidas alcoólicas nas últimas 12 horas?</li>
              </ul>
            </>
          ),
          options: ["Sim", "Não"],
        },
        {
          question: (
            <>
              <ul>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você pesa menos de 50kg?</li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Tomou vacina contra Dengue nos últimos 28 dias?</li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Vacina contra a gripe nas últimas 48 horas?</li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Ou realizou qualquer procedimento endoscópico nos últimos 6 meses?</li>
              </ul>
            </>
          ),
          options: ["Sim", "Não"],
        },
        {
          question: (
            <>
              <ul>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Esteve resfriado, fez extração de dente ou tratamento de canal? </li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Tomou vacina contra COVID-19 e/ou teve diagnóstico positivo ou suspeita (sintomático ou assintomático) nos últimos 7 dias?</li>
              </ul>
            </>
          ),
          options: ["Sim", "Não"],
        },
        {
          question: (
            <>
              <ul>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você esteve grávida nos últimos 12 meses e está amamentando?</li> 
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> O parto ocorreu nos últimos 90 dias (parto normal) ou 180 dias (parto cesariana)?</li>
              </ul>
            </>
          ),
          options: ["Sim", "Não"],
        },
        {
          question: (
            <>
              <ul>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você esteve nos Estados Unidos (e/ou regiões com surto de febre amarela) nos últimos 30 dias? </li>
                <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg>Ou morou na Europa após 1980?</li>
              </ul>
            </>
          ),
          options: ["Sim", "Não"],
        }
      ];

    function Teste() {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [selectedOption, setSelectedOption] = useState('');
        const [quizEnded, setQuizEnded] = useState(false);
        const [responses, setResponses] = useState<string[]>([]); 
        const [modalVisible, setModalVisible] = useState(false);
        const navigate = useNavigate(); 

        const handleOptionChange = (option: string) => {
            setSelectedOption(option);
        };

        const handleSubmit = () => {
            if (!selectedOption) {
                setModalVisible(true);
                return;
            }

            if (selectedOption === "Não") {
                setModalVisible(true);
            } else {
                const updatedResponses = [...responses];
                updatedResponses[currentQuestion] = selectedOption;
                setResponses(updatedResponses);

                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                    setSelectedOption(''); 
                } else {
                    setQuizEnded(true);
                    if (updatedResponses.every(response => response === "Sim")) {
                        navigate('/pagecadastro');
                    }
                }
            }
        };

        const handleRestart = () => {
            setCurrentQuestion(0);
            setSelectedOption('');
            setQuizEnded(false);
            setModalVisible(false);
            navigate('/'); 
        };

        return (
            <div className="quiz-container">
                        <img style={{padding: '0px', width:'50%'}}  src={imagemteste} alt="img doação SangueBom" />
                {modalVisible && (
                    <div className="modal">
                        <div className="modal-content">
                        <h2>
                            {selectedOption === '' 
                                ? "Por favor, selecione uma opção." 
                                : "Infelizmente você ainda não está apto para doar sangue."
                            }
                        </h2>
                            <button onClick={handleRestart}>Fechar</button>
                        </div>
                    </div>
                )}
                {!modalVisible && !quizEnded && (
                    <div className="quiz">
                        <h2>{questions[currentQuestion].question}</h2>
                        <div className="options">
                            {questions[currentQuestion].options.map((option, index) => (
                                <div key={index} className="option">
                                    <input
                                        type="radio"
                                        id={option}
                                        name="option"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={() => handleOptionChange(option)}
                                    />
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            ))}
                        </div>
                        <button className="btn_quiz" onClick={handleSubmit}>
                            <span style={{ color: 'white' }}>Posso Doar?</span>
                        </button>
                    </div>
                )}
            </div>
        );
    }


    function PageCadastro() {
        TabTitle('Home - Sangue Bom');
        
        const [addNome, setAddNome] = useState('');
        const [addEmail, setAddEmail] = useState('');
        const [addTelefone, setAddTelefone] = useState('');
        const [addSenha, setAddSenha] = useState('');
        const [addDataNascimento, setAddDataNascimento] = useState('');
        const [addTipoSanguineo, setAddTipoSanguineo] = useState('');
        const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
        const [loading, setLoading] = useState(false);
        const [mensagem, setMensagem] = useState('');
        const [isErro, setIsErro] = useState(false);
        const [mostrarMensagem, setMostrarMensagem] = useState(false);
    
        const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
            setAddNome(e.target.value);
        }
    
        const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
            setAddEmail(e.target.value);
        }
    
        const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => {
            setAddTelefone(e.target.value);
        }
    
        const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
            setAddSenha(e.target.value);
        }
    
        const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => {
            setAddDataNascimento(e.target.value);
        }
    
        const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => {
            setAddTipoSanguineo(e.target.value);
        }
    
        const carregarUsuarios = async () => {
            setLoading(true);
            setUsuarios([]);
            try {
                const json = await ModuloApi.CarregarUsuarios();
                const dataArray = Array.isArray(json) ? json : [json];
                setUsuarios(dataArray); 
            } catch (error) {
                console.error("Erro ao carregar usuários:", error);
            } finally {
                setLoading(false);
            }
        }
    
        const adicionarUsuarios = async () => {
            if (addNome && addEmail && addTelefone && addSenha && addDataNascimento && addTipoSanguineo) {
                try {
                    const sucesso = await ModuloApi.AdicionarUsuario(
                        addNome, 
                        addEmail, 
                        addTelefone, 
                        addSenha, 
                        addDataNascimento, 
                        addTipoSanguineo
                    );
                    console.log(sucesso);
                    if (sucesso) {
                        setMensagem('Cadastro realizado com sucesso❣️');
                        setIsErro(false);
                    } else {
                        setMensagem('Verifique os campos e tente novamente');
                        setIsErro(true);
                    }
                } catch (error) {
                    console.error("Erro ao adicionar usuário:", error);
                    setMensagem('Algo deu errado. Recarregue a página e tente novamente');
                    setIsErro(true);
                }
            } else {
                setMensagem('Preencha todas as informações.');
                setIsErro(true);
            }
    
            setMostrarMensagem(true); 
            setTimeout(() => {
                setMostrarMensagem(false);
            }, 5000); 
        }
    
        return (
                <div className="container">
                    <div className="form-wrapper">
                            <img style={{padding: '0px', width:'50%'}}  src={imagemcadastro} alt="img doação SangueBom" />
                        <div className="form">
                            <h3 className="tit_cads">Seja Bem-vindo(a)!<br />Cadastre-se aqui:</h3>
                            <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
                            <input type="text" value={addNome} onChange={handleChangeNome} placeholder="Nome Completo" />
                            <input type="email" value={addEmail} onChange={handleChangeEmail} placeholder="Informe seu melhor email" />
                            <input type="text" value={addTelefone} onChange={handleChangeTelefone} placeholder="Informe seu telefone" />
                            <input type="password" value={addSenha} onChange={handleChangeSenha} placeholder="Crie sua Senha de 8 dígitos" />
                            <div className="date-container">
                                <span>Data de Nascimento</span>
                                <input type="date" value={addDataNascimento} onChange={handleChangeDataNascimento} />
                            </div>
                            <select value={addTipoSanguineo} onChange={handleChangeTipoSanguineo}>
                                <option value="">Selecione o Tipo Sanguíneo</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="não informado">Não Sei</option>
                            </select>
                            {loading && <div>Carregando Conteúdo...</div>}
                            {!loading && <button className="btn_form" onClick={adicionarUsuarios}>Criar Cadastro</button>}
                            {mostrarMensagem && (
                                <div className={isErro ? "mensage mensage_erro" : "mensage mensage_sucesso"}>
                                    {mensagem}
                                </div>
                            )}
                        </div>
                        {/* <div className="retorno">
                            <a href="/" className="a_retorno">
                                <svg className="angle-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path fill="#ff7f7f" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                                </svg>
                            </a>
                        </div> */}
                    </div>
                </div>
        );
    }
    return (
        <div className='home_container'>
            <div className="home_posso_doar">
            {/* <Cabecalho/> */}
            <Header/>
                <div className="home_pd_possodoar">
                    <h1>Posso doar?</h1>
                </div>
                <div className="home_pd_descubra">
                    <p>Faça o teste e descubra se você está apto para doação.</p>
                </div>
                <Link className="home_pd_teste" to="/teste">
                    <div>
                        <p>Teste</p>
                    </div>
                </Link>
                <div className="div_carrosel">
            <Carousel/>
            </div>
            <h2 className="vejalocais_home">Veja os Locais de Doação em Bauru-SP:</h2>
            <DonationLocation
            name="Hemonucleo Hospital de Base"
            endereco="Endereço: R. Monsenhor Claro, 8-88 - Centro, Bauru - SP"
            phone="Contato: (14) 3231-4771"
            descricao="Email: sau.hb@famesp.org.br. Horário de funcionamento: segunda a sexta, das 7h às 11h30 e das 13h às 15h30. Sabádo das 7h às 12h."
            imageUrl={hemonucleob} 
            mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.518845994719!2d-49.0769005!3d-22.3298397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67abe122bd7d%3A0xafb31e84daef97ab!2sHemon%C3%BAcleo!5e0!3m2!1sen!2sbr!4v1724718310355!5m2!1sen!2sbr"
            />
            <DonationLocation
            name="Hemovida - Benefiência Portuguesa"
            endereco="Endereço: Rua Rio Branco, 13-83 Centro Bauru, SP"
            phone="Contato: (14)3223-6933 "
            imageUrl={hemonucleop} 
            descricao="Email: contato@benebauru.com.br. Horário de funcionamento: segunda a sexta, das 7h às 12h ou das 13h30 às 16h."
            mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14762.747965015958!2d-49.0702758!3d-22.3276746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67b725476f9f%3A0x4406c4303c47f58a!2sHospital%20Benefic%C3%AAncia%20Portuguesa%20de%20Bauru!5e0!3m2!1sen!2sbr!4v1724798494191!5m2!1sen!2sbr"
            />
            <h2 className="vejalocais_home">Confira se você está apto a doar</h2>
            <Teste />
            <h2 className="vejalocais_home">Cadastre-se</h2>
            <PageCadastro/>
            <FAQ/>
            <Footer />
            <BloodTypeSelector />
            <ExpandablePopup />
            </div>
        </div>
    );
}

export default Home;
