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
    { 
      image: lekos, 
      name: 'Alexandre Angelo', 
      description: '25 anos, Bauru-SP', 
      linkedin: 'https://www.linkedin.com/in/alexandre-angelo/', 
      whatsapp: '5511999999999' 
    },
    { 
      image: danis, 
      name: 'Daniel Izidoro', 
      description: '19 anos, Bauru-SP', 
      linkedin: 'https://www.linkedin.com/in/daniel-izidoro/', 
      whatsapp: '5511999999999' 
    },
    { 
      image: gabs, 
      name: 'Gabriel Martielo', 
      description: '20 anos, Agudos-SP', 
      linkedin: 'https://www.linkedin.com/in/gabriel-martielo/', 
      whatsapp: '5511999999999' 
    },
    { 
      image: hyan, 
      name: 'Hyan Morena', 
      description: '19 anos, Bauru-SP', 
      linkedin: 'https://www.linkedin.com/in/hyan-morena/', 
      whatsapp: '5511999999999' 
    },
    { 
      image: ivas, 
      name: 'Ivan David', 
      description: '39 anos, Bauru-SP', 
      linkedin: 'https://www.linkedin.com/in/ivan-david/', 
      whatsapp: '5511999999999' 
    }
  ];

  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
          linkedin={item.linkedin}
          whatsapp={item.whatsapp}
        />
      ))}
    </div>
  );
};

export default CardList;

