import Cabecalho from "../components/cabecalho";
import Footer from "../components/footer";
import { TabTitle } from "../components/GeneralFunctions/GeneralFunctions";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import imagemteste from "../assests/imagem login.jpg"; 


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
            {/* <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você pesa mais de 50kg?</li> */}
            <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Não tomou vacina contra Dengue nos últimos 28 dias?</li>
            <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Não se vacinou contra a gripe nas últimas 48 horas?</li>
            <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Não realizou qualquer procedimento endoscópico nos últimos 6 meses?</li>
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
    TabTitle('Home - Sangue Bom')

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
      const isLastThreeQuestions = currentQuestion >= questions.length - 3;
     
      // Exibir o modal se a resposta for "Sim" nas últimas 3 perguntas
      if ((selectedOption === "Sim" && isLastThreeQuestions) || (selectedOption === "Não" && !isLastThreeQuestions)) {
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

    return(
        <div>
            <div className="quiz-container">
             <img style={{padding: '0px', width:'50%'}}  src={imagemteste} alt="img doação SangueBom" />
                {modalVisible && (
                    <div className="modal">
                    <div className="modal-content">
                        <h2>Infelizmente você ainda não está apto para doar sangue</h2>
                        <button onClick={handleRestart}>Fechar</button>
                    </div>
                    </div>
                )}
                {!modalVisible && !quizEnded ? (
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
                    <div className="wrapper">
                        <a className="cta" href="#">
                        <button className="btn_quiz" onClick={handleSubmit}><span style={{ color: 'white' }}>Posso Doar?</span>
                        </button>
                        <span>
                            <svg width="33px" height="22px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path className ="one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                <path className ="two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                <path className ="three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                            </g>
                            </svg>
                        </span> 
                        </a>
                    </div>
                    </div>
                ) : null}
                </div>
                    
                    <br />
                    <br />
                  
                    </div>
                )
}

export default Teste;

// const questions = [
    //     {
    //       question: (
    //         <>
    //           Caso você seja doador(a), verifique se você já cumpriu os intervalos entre doações:
    //           <ul>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Homem - 60 dias (no máx. 4 doações/ano)</li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Mulher - 90 dias (no máx. 3 doações/ano)</li>
    //           </ul>
    //         </>
    //       ),
    //       options: ["Sim", "Não"],
    //     },
    //     {
    //       question: (
    //         <>
    //           <ul>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você tem entre 16 e 69 anos? </li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> E está em boas condições de saúde? </li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Sem ingerir bebidas alcoólicas nas últimas 12 horas?</li>
    //           </ul>
    //         </>
    //       ),
    //       options: ["Sim", "Não"],
    //     },
    //     {
    //       question: (
    //         <>
    //           <ul>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você pesa menos de 50kg?</li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Tomou vacina contra Dengue nos últimos 28 dias?</li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Vacina contra a gripe nas últimas 48 horas?</li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Ou realizou qualquer procedimento endoscópico nos últimos 6 meses?</li>
    //           </ul>
    //         </>
    //       ),
    //       options: ["Sim", "Não"],
    //     },
    //     {
    //       question: (
    //         <>
    //           <ul>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Esteve resfriado, fez extração de dente ou tratamento de canal? </li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Tomou vacina contra COVID-19 e/ou teve diagnóstico positivo ou suspeita (sintomático ou assintomático) nos últimos 7 dias?</li>
    //           </ul>
    //         </>
    //       ),
    //       options: ["Sim", "Não"],
    //     },
    //     {
    //       question: (
    //         <>
    //           <ul>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você esteve grávida nos últimos 12 meses e está amamentando?</li> 
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> O parto ocorreu nos últimos 90 dias (parto normal) ou 180 dias (parto cesariana)?</li>
    //           </ul>
    //         </>
    //       ),
    //       options: ["Sim", "Não"],
    //     },
    //     {
    //       question: (
    //         <>
    //           <ul>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg> Você esteve nos Estados Unidos (e/ou regiões com surto de febre amarela) nos últimos 30 dias? </li>
    //             <li><svg className='arrow' viewBox="0 0 24 24"><path d="M7 4l6 6-6 6V4z" fill="red"/></svg>Ou morou na Europa após 1980?</li>
    //           </ul>
    //         </>
    //       ),
    //       options: ["Sim", "Não"],
    //     }
    //   ];

    // function Teste() {
    //     const [currentQuestion, setCurrentQuestion] = useState(0);
    //     const [selectedOption, setSelectedOption] = useState('');
    //     const [quizEnded, setQuizEnded] = useState(false);
    //     const [responses, setResponses] = useState<string[]>([]); 
    //     const [modalVisible, setModalVisible] = useState(false);
    //     const navigate = useNavigate(); 

    //     const handleOptionChange = (option: string) => {
    //         setSelectedOption(option);
    //     };

    //     const handleSubmit = () => {
    //         if (!selectedOption) {
    //             setModalVisible(true);
    //             return;
    //         }

    //         if (selectedOption === "Não") {
    //             setModalVisible(true);
    //         } else {
    //             const updatedResponses = [...responses];
    //             updatedResponses[currentQuestion] = selectedOption;
    //             setResponses(updatedResponses);

    //             if (currentQuestion < questions.length - 1) {
    //                 setCurrentQuestion(currentQuestion + 1);
    //                 setSelectedOption(''); 
    //             } else {
    //                 setQuizEnded(true);
    //                 if (updatedResponses.every(response => response === "Sim")) {
    //                     navigate('/pagecadastro');
    //                 }
    //             }
    //         }
    //     };

    //     const handleRestart = () => {
    //         setCurrentQuestion(0);
    //         setSelectedOption('');
    //         setQuizEnded(false);
    //         setModalVisible(false);
    //         navigate('/'); 
    //     };

    //     return (
    //         <div className="quiz-container">
    //                     <img style={{padding: '0px', width:'50%'}}  src={imagemteste} alt="img doação SangueBom" />
    //             {modalVisible && (
    //                 <div className="modal">
    //                     <div className="modal-content">
    //                     <h2>
    //                         {selectedOption === '' 
    //                             ? "Por favor, selecione uma opção." 
    //                             : "Infelizmente você ainda não está apto para doar sangue."
    //                         }
    //                     </h2>
    //                         <button onClick={handleRestart}>Fechar</button>
    //                     </div>
    //                 </div>
    //             )}
    //             {!modalVisible && !quizEnded && (
    //                 <div className="quiz">
    //                     <h2>{questions[currentQuestion].question}</h2>
    //                     <div className="options">
    //                         {questions[currentQuestion].options.map((option, index) => (
    //                             <div key={index} className="option">
    //                                 <input
    //                                     type="radio"
    //                                     id={option}
    //                                     name="option"
    //                                     value={option}
    //                                     checked={selectedOption === option}
    //                                     onChange={() => handleOptionChange(option)}
    //                                 />
    //                                 <label htmlFor={option}>{option}</label>
    //                             </div>
    //                         ))}
    //                     </div>
    //                     <button className="btn_quiz" onClick={handleSubmit}>
    //                         <span style={{ color: 'white' }}>Posso Doar?</span>
    //                     </button>
    //                 </div>
    //             )}
    //         </div>
    //     );
    // }


    // function PageCadastro() {
    //     TabTitle('Home - Sangue Bom');
        

        // const [addID, setAddID] = useState('');
        // const [addNOME, setAddNome] = useState('');
        // const [addEMAIL, setAddEmail] = useState('');
        // const [addTELEFONE, setAddTelefone] = useState('');
        // const [addSENHA, setAddSenha] = useState('');
        // const [addDATANASCIMENTO, setAddDataNascimento] = useState('');
        // const [addTIPOSANGUINEO, setAddTipoSanguineo] = useState('');
        // const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
        // const [loading, setLoading] = useState(false);
        // const [mensagem, setMensagem] = useState('');
        // const [isErro, setIsErro] = useState(false);
        // const [mostrarMensagem, setMostrarMensagem] = useState(false);

        // const handleChangeID = (e: ChangeEvent<HTMLInputElement>) => {
        //     setAddNome(e.target.value);
        // }
    
    //     const handleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
    //         setAddNome(e.target.value);
    //     }
    
    //     const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    //         setAddEmail(e.target.value);
    //     }
    
    //     const handleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => {
    //         setAddTelefone(e.target.value);
    //     }
    
    //     const handleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
    //         setAddSenha(e.target.value);
    //     }
    
    //     const handleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => {
    //         setAddDataNascimento(e.target.value);
    //     }
    
    //     const handleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => {
    //         setAddTipoSanguineo(e.target.value);
    //     }
    
    //     const carregarUsuarios = async () => {
    //         setLoading(true);
    //         setUsuarios([]);
    //         try {
    //             const json = await ModuloApi.CarregarUsuarios();
    //             const dataArray = Array.isArray(json) ? json : [json];
    //             setUsuarios(dataArray); 
    //         } catch (error) {
    //             console.error("Erro ao carregar usuários:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    

        // const adicionarUsuarios = async () => {
        //     if (addNOME && addEMAIL && addTELEFONE && addSENHA && addDATANASCIMENTO && addTIPOSANGUINEO) {
        //         try {
        //             const sucesso = await ModuloApi.AdicionarUsuario(
        //                 addID,
        //                 addNOME, 
        //                 addEMAIL, 
        //                 addTELEFONE, 
        //                 addSENHA, 
        //                 addDATANASCIMENTO, 
        //                 addTIPOSANGUINEO
        //             );
        //             console.log(sucesso);
        //             if (sucesso) {
        //                 setMensagem('Cadastro realizado com sucesso❣️');
        //                 setIsErro(false);
        //             } else {
        //                 setMensagem('Verifique os campos e tente novamente');
        //                 setIsErro(true);
        //             }
        //         } catch (error) {
        //             console.error("Erro ao adicionar usuário:", error);
        //             setMensagem('Algo deu errado. Recarregue a página e tente novamente');
        //             setIsErro(true);
        //         }
        //     } else {
        //         setMensagem('Preencha todas as informações.');
        //         setIsErro(true);
        //     }
    
    //         setMostrarMensagem(true); 
    //         setTimeout(() => {
    //             setMostrarMensagem(false);
    //         }, 5000); 
    //     }
    

    //     return (
    //             <div className="container">
    //                 <div className="form-wrapper">
    //                         <img style={{padding: '0px', width:'50%'}}  src={imagemcadastro} alt="img doação SangueBom" />
    //                     <div className="form">
    //                         <h3 className="tit_cads">Seja Bem-vindo(a)!<br />Cadastre-se aqui:</h3>
    //                         <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
    //                         <input type="text" value={addNOME} onChange={handleChangeNome} placeholder="Nome Completo" />
    //                         <input type="email" value={addEMAIL} onChange={handleChangeEmail} placeholder="Informe seu melhor email" />
    //                         <input type="text" value={addTELEFONE} onChange={handleChangeTelefone} placeholder="Informe seu telefone" />
    //                         <input type="password" value={addSENHA} onChange={handleChangeSenha} placeholder="Crie sua Senha de 8 dígitos" />
    //                         <div className="date-container">
    //                             <span>Data de Nascimento</span>
    //                             <input type="date" value={addDATANASCIMENTO} onChange={handleChangeDataNascimento} />
    //                         </div>
    //                         <select value={addTIPOSANGUINEO} onChange={handleChangeTipoSanguineo}>
    //                             <option value="">Selecione o Tipo Sanguíneo</option>
    //                             <option value="A+">A+</option>
    //                             <option value="A-">A-</option>
    //                             <option value="B+">B+</option>
    //                             <option value="B-">B-</option>
    //                             <option value="AB+">AB+</option>
    //                             <option value="AB-">AB-</option>
    //                             <option value="O+">O+</option>
    //                             <option value="O-">O-</option>
    //                             <option value="não informado">Não Sei</option>
    //                         </select>
    //                         {loading && <div>Carregando Conteúdo...</div>}
    //                         {!loading && <button className="btn_form" onClick={adicionarUsuarios}>Criar Cadastro</button>}
    //                         {mostrarMensagem && (
    //                             <div className={isErro ? "mensage mensage_erro" : "mensage mensage_sucesso"}>
    //                                 {mensagem}
    //                             </div>
    //                         )}
    //                     </div>
    //                 </div>
    //             </div>
    //     );
    // }




