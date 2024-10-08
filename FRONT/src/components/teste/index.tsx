import React, { useState } from 'react';
import '../teste/carrosel.css'; // Importar CSS para estilização
import '../teste/carrosel.css'

// Definindo a interface para as informações do card
interface CardInfo {
    id: number;
    icon: string;
    title: string;
    description: string;
}

// Dados do carrossel
const cardData: CardInfo[] = [
    {
        id: 1,
        icon: '❤️',
        title: 'Doe Sangue',
        description: 'A doação de sangue pode salvar vidas. Doe e ajude quem precisa!',
    },
    {
        id: 2,
        icon: '🏥',
        title: 'Centro de Doação',
        description: 'Encontre o centro de doação mais próximo de você.',
    },
    {
        id: 3,
        icon: '💉',
        title: 'Requisitos',
        description: 'Verifique os requisitos para ser um doador de sangue.',
    },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>&lt;</button>
            <div className="carousel-content">
                {cardData.map((card, index) => (
                    <div
                        key={card.id}
                        className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
                    >
                        <div className="icon">{card.icon}</div>
                        <h3 className='h3-carrossel'>{card.title}</h3>
                        <p className='p-carrossel'>{card.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default Carousel;
