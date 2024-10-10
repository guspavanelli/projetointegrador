import React, { useState } from 'react';
import '../FAQ/style.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "🩸 Quem pode doar sangue?",
      answer: "Qualquer pessoa saudável, entre 16 e 69 anos, pesando mais de 50kg.",
    },
    {
      question: "⏳ Quanto tempo leva para doar sangue?",
      answer: "O processo todo leva cerca de 40 a 60 minutos.",
    },
    {
      question: "🥤 Posso comer antes de doar sangue?",
      answer: "Sim! É importante estar bem alimentado, mas evite alimentos gordurosos antes da doação.",
    },
    {
      question: "📅 Com que frequência posso doar sangue?",
      answer: "Homens podem doar a cada 2 meses e mulheres a cada 3 meses.",
    },
    {
      question: "🤒 Posso doar sangue se estiver gripado?",
      answer: "Não. É necessário estar completamente saudável para doar.",
    },
    {
      question: "💉 Doar sangue dói?",
      answer: "A sensação é similar à de uma picada de agulha, mas o desconforto é breve.",
    },
    {
      question: "🚫 Quem não pode doar sangue?",
      answer: "Pessoas com certas condições de saúde, como hepatite ou doenças infecciosas, não podem doar.",
    },
    {
      question: "🏥 O que acontece após a doação?",
      answer: "Seu sangue será testado para várias doenças antes de ser disponibilizado para uso em hospitais.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Perguntas Frequentes</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-toggle-icon">{activeIndex === index ? '−' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
            {faq.answer}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
