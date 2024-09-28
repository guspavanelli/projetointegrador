import React, { useState } from 'react';
import '../../components/teste/style.css'

interface LocationProps {
  name: string;
  phone: string;
  imageUrl: string; 
  mapUrl: string;
  endereco: string;   
}

const DonationLocation: React.FC<LocationProps> = ({ name, endereco, phone, imageUrl, mapUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.container}>
      <div style={styles.locationInfo}>
        <img src={imageUrl} alt={name} className='image' />
        <div style={styles.textContainer}>
          <h2>{name}</h2>
          <p>{endereco}</p>
          <p>{phone}</p>
        </div>
        <button style={styles.button} onClick={toggleExpand}>
          LOCAL
        </button>
      </div>

      {isExpanded && (
        <div style={styles.extraInfo}>
          <h3>Mais informações</h3>
          <p></p>
          <iframe
            src={mapUrl}
            width="100%"
            height="300"
            style={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

// Estilos inline para o componente
const styles = {
  container: {
    marginBottom: '20px',
    borderRadius: '10px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  locationInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  image: {
    width: '100px',  // Tamanho da imagem
    height: '100px',
    marginRight: '20px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  textContainer: {
    flex: 1,  // Permite que o texto ocupe mais espaço
    marginRight: '20px',
  },
  button: {
    backgroundColor: '#a00000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  extraInfo: {
    padding: '20px',
    backgroundColor: '#fff',
  },
  map: {
    borderRadius: '10px',
    border: 'none',
  },
};

export default DonationLocation;
