import React from 'react';
import '../erro404/style.css';

const Error404: React.FC = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-message">
          Oops! Parece que essa página <strong>desapareceu</strong>... <br />
          Não se preocupe, você pode voltar para a <span className="highlight">Home</span>!
        </p>
        <button className="home-button" onClick={goHome}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
