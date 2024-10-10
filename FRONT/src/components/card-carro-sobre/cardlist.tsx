// CardList.tsx
import React from 'react';
import Card from './card';
import './card.css';
import lekos from '../../assests/fotos.colab/lekos.png'
import danis from '../../assests/fotos.colab/danis.png'
import gabs from '../../assests/fotos.colab/gabs.png'
import ivas from '../../assests/fotos.colab/ivas.png'
import hyan from '../../assests/fotos.colab/hyan.png'

const CardList: React.FC = () => {
  const data = [
    { image: lekos, name: 'Alexandre Angelo', description: '25 anos, Bauru-SP' },
    { image: danis, name: 'Daniel Izidoro', description: '19 anos, Bauru-SP' },
    { image: gabs, name: 'Gabriel Martielo', description: '20 anos, Bauru-SP' },
    { image: hyan, name: 'Hyan Morena', description: '19 anos, Bauru-SP' },
    { image: ivas, name: 'Ivan David', description: '39 anos, Bauru-SP' }
    
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
