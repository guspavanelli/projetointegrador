// CardList.tsx
import React from 'react';
import Card from './card';
import './card.css';

const CardList: React.FC = () => {
  const data = [
    { image: 'https://via.placeholder.com/60', name: 'Fulano de tal', description: 'pipipi popopó.........' },
    { image: 'https://via.placeholder.com/60', name: 'Fulano de tal', description: 'pipipi popopó.........' },
    { image: 'https://via.placeholder.com/60', name: 'Fulano de tal', description: 'pipipi popopó.........' },
    { image: 'https://via.placeholder.com/60', name: 'Fulano de tal', description: 'pipipi popopó.........' },
    { image: 'https://via.placeholder.com/60', name: 'Fulano de tal', description: 'pipipi popopó.........' },
    { image: 'https://via.placeholder.com/60', name: 'Fulano de tal', description: 'pipipi popopó.........' }
  ];

  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
