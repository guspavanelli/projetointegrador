import React, { useState } from 'react';
import './card.css';
import Whats from '../../assests/locais/whatsapp.png'
import Linkd from '../../assests/locais/linkedin (1).png'

interface CardProps {
  image: string;
  name: string;
  description: string;
  linkedin: string;
  whatsapp: string;
}

const Card: React.FC<CardProps> = ({ image, name, description, linkedin, whatsapp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={handleToggle} className="expand-btn">
          {isExpanded ? 'Ocultar' : 'Contato'}
        </button>
        {isExpanded && (
          <div className="social-links">
            <a href={linkedin} target="www.linkedin.com" rel="noopener noreferrer">
              <img src={Linkd} alt="LinkedIn" />
            </a>
            <a href={`https://wa.me/${whatsapp}`} target="www.whatsapp.com" rel="noopener noreferrer">
              <img src={Whats} alt="WhatsApp" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

