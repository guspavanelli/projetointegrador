import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import imagemteste from "../assests/imagem login.jpg"; 
import { TabTitle } from '../components/GeneralFunctions/GeneralFunctions';


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

export default Teste
    