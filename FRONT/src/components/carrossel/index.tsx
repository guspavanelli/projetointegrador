import React, { useState, useEffect } from 'react';
import './carrosel.css';

interface CardInfo {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const cardData: CardInfo[] = [
    { id: 1, icon: '❤️', title: 'Doe Sangue', description: 'A doação de sangue pode salvar vidas. Doe e ajude quem precisa!' },
    { id: 2, icon: '🏥', title: 'Centro de Doação', description: 'Encontre o centro de doação mais próximo de você.' },
    { id: 3, icon: '💉', title: 'Requisitos', description: 'Verifique os requisitos para ser um doador de sangue.' },
    { id: 4, icon: '📅', title: 'Agende sua Doação', description: 'Agende sua doação e faça a diferença!' },
    { id: 5, icon: '💪', title: 'Benefícios', description: 'Descubra os benefícios de doar sangue regularmente.' },
    { id: 6, icon: '📍', title: 'Localização', description: 'Veja como chegar ao centro de doação mais próximo.' },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = cardData.length;

    // Duplicando os cards para criar a sensação de loop infinito
    const cards = [...cardData, ...cardData]; 

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Avança automaticamente a cada 3 segundos
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <button className="carousel-button left" onClick={prevSlide} aria-label="Previous Slide">
                &lt;
            </button>
            <div className="carousel-wrapper">
                <div className="carousel-content" style={{ transform: `translateX(-${(currentIndex + 2) * (100 / totalCards)}%)` }}>
                    {cards.map((card, index) => (
                        <div
                            className={`carousel-card ${index === currentIndex ? 'active' : ''} ${index === (currentIndex + 1) % totalCards ? 'next' : ''} ${index === (currentIndex - 1 + totalCards) % totalCards ? 'prev' : ''}`}
                            key={`${card.id}-${index}`}>
                            <div className="icon" style={{ fontSize: '2rem' }}>{card.icon}</div>
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-button right" onClick={nextSlide} aria-label="Next Slide">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
