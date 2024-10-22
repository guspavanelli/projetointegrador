import React, { useState } from 'react';
import '../botaoajuda/style.css';

const ExpandablePopup: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState('');

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const AlertaEnvio = () => {
    alert('Você será redirecionado para enviar seu Email!');
    setIsPopupVisible(!isPopupVisible);
  };

  const recipientEmail = "sacsanguebom@gmail.com";
  const mailtoLink = `mailto:${recipientEmail}?subject=Contato&body=${encodeURIComponent(message)}`;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      {/* Botão flutuante no canto inferior esquerdo */}
      <div className={`expandable-button ${isPopupVisible ? 'expanded' : ''}`} onClick={togglePopup}>
        <span>Atendimento</span>
      </div>

      {/* Caixa de texto expansível */}
      {isPopupVisible && (
        <div className="expandable-popup-container">
          <div className="expandable-popup-content">
            <h2>Atendimento ao Usuário</h2>
            <textarea
              className="expandable-text-area"
              value={message}
              onChange={handleMessageChange}
              placeholder="Digite aqui suas dúvidas, reclamações, elogios e sugestões..."
            />
            <a className='tirarrisco' href={mailtoLink}><button className="expandable-send-button" onClick={AlertaEnvio}>Enviar</button></a>
            <button className="expandable-close-popup" onClick={togglePopup}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandablePopup;
