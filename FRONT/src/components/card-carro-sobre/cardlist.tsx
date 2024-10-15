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
      linkedin: 'https://www.linkedin.com/in/alexandre-angelo-a70867137', 
      whatsapp: '5514997629643'
 
    },
    { 
      image: danis, 
      name: 'Daniel Izidoro', 
      description: '19 anos, Bauru-SP', 
      linkedin: 'http://www.linkedin.com/in/daniel-izidoro-aa73b7197', 
      whatsapp: '5514988156392' 
    },
    { 
      image: gabs, 
      name: 'Gabriel Martielo', 
      description: '20 anos, Agudos-SP', 
      linkedin: 'http://www.linkedin.com/in/gabriel-martielo-b35151271/', 
      whatsapp: '5514991255559' 
    },
    { 
      image: hyan, 
      name: 'Hyan Morena', 
      description: '19 anos, Bauru-SP', 
      linkedin: 'https://www.linkedin.com/in/hyanzim-moreno-41230b332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      whatsapp: '5514991255559' 
    },
    { 
      image: ivas, 
      name: 'Ivan David', 
      description: '39 anos, Bauru-SP', 
      linkedin: 'https://br.linkedin.com/in/ivan-david-63480a142', 
      whatsapp: '5514991225256' 
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

