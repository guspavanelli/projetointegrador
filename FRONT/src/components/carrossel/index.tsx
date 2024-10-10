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
    { id: 4, icon: '💡', title: 'Curiosidades', description: 'Sabia que uma única doação pode salvar até 4 vidas?' },
    { id: 5, icon: '💪', title: 'Benefícios', description: 'Descubra os benefícios de doar sangue regularmente.' },
    { id: 6, icon: '📍', title: 'Localização', description: 'Veja como chegar ao centro de doação mais próximo.' },
    { id: 7, icon: '⏳', title: 'Tempo de Doação', description: 'O processo de doação de sangue leva cerca de 40 a 60 minutos.' },
    { id: 8, icon: '🩺', title: 'Exame Gratuito', description: 'Ao doar sangue, você faz um pequeno exame de saúde gratuito.' },
    { id: 9, icon: '💧', title: 'Hidratação', description: 'Beba bastante água antes e depois de doar sangue para ajudar na recuperação.' },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = cardData.length;
    const cards = [...cardData, ...cardData]; // Duplicando os cards para rolar infinitamente

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Avança automaticamente a cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${(currentIndex * (100 / 3))}%)`, transition: 'transform 0.5s ease-in-out' }}
                >
                    {cards.map((card, index) => (
                        <div className="carousel-card" key={index}>
                            <div className="icon" style={{ fontSize: '2rem' }}>{card.icon}</div>
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
