import React from "react";
import Slider from "react-slick";
import { FaHeartbeat, FaHandsHelping, FaUserPlus } from 'react-icons/fa';


interface CardData {
  icon: JSX.Element;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    icon: <FaHeartbeat size={40} />,
    title: 'Benefícios da Doação',
    description: 'A doação de sangue ajuda a salvar vidas e traz benefícios à saúde do doador.',
  },
  {
    icon: <FaHandsHelping size={40} />,
    title: 'Como Doar',
    description: 'Procure um hemocentro próximo e siga as orientações para se tornar um doador.',
  },
  {
    icon: <FaUserPlus size={40} />,
    title: 'Quem Pode Doar',
    description: 'Qualquer pessoa saudável, entre 16 e 69 anos, pode ser um doador de sangue.',
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
    <div className="carousel-container">
      <h2>Informações sobre Doação de Sangue</h2>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="carousel-card">
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BloodDonationCarousel;
