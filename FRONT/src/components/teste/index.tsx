import React from 'react';
import Slider from 'react-slick';
import { FaHeart, FaHeartbeat, FaInfoCircle } from 'react-icons/fa';
import '../teste/carrosel.css'

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: <FaHeart />,
    title: "Doe Sangue",
    description: "Sua doação pode salvar vidas!",
  },
  {
    icon: <FaHeartbeat />,
    title: "Quem Pode Doar?",
    description: "Qualquer pessoa saudável entre 16 e 69 anos.",
  },
  {
    icon: <FaInfoCircle />,
    title: "Como Doar?",
    description: "Visite um banco de sangue próximo e agende sua doação.",
  },
];

const BloodDonationCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h2>Informações sobre Doação de Sangue</h2>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BloodDonationCarousel;
