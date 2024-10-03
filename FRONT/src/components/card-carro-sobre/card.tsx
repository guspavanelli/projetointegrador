// Card.tsx
import React from 'react';
import './card.css';

interface CardProps {
  image: string;
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, name, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
