import React, { useState } from 'react';
import '../botaoflutuante/style.css';

// Definindo as compatibilidades de tipos sanguíneos
const bloodCompatibilityData: { 
  [key: string]: { donateTo: string[], receiveFrom: string[] } 
} = {
  'A+': { donateTo: ['A+', 'AB+'], receiveFrom: ['A+', 'A-', 'O+', 'O-'] },
  'A-': { donateTo: ['A+', 'A-', 'AB+', 'AB-'], receiveFrom: ['A-', 'O-'] },
  'B+': { donateTo: ['B+', 'AB+'], receiveFrom: ['B+', 'B-', 'O+', 'O-'] },
  'B-': { donateTo: ['B+', 'B-', 'AB+', 'AB-'], receiveFrom: ['B-', 'O-'] },
  'AB+': { donateTo: ['AB+'], receiveFrom: ['Todos'] },
  'AB-': { donateTo: ['AB+', 'AB-'], receiveFrom: ['AB-', 'A-', 'B-', 'O-'] },
  'O+': { donateTo: ['O+', 'A+', 'B+', 'AB+'], receiveFrom: ['O+', 'O-'] },
  'O-': { donateTo: ['Todos'], receiveFrom: ['O-'] },
};

const BloodTypePopup: React.FC = () => {
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBloodType(e.target.value);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      {/* Botão flutuante no canto */}
      <div className={`floating-button ${isPopupVisible ? 'expanded' : ''}`} onClick={togglePopup}>
        <span>Compatibilidade <br />
        Sanguínea</span>
      </div>

      {/* Pop-up */}
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Selecione seu Tipo Sanguíneo:</h2>
            <select onChange={handleSelectChange} className="dropdown" defaultValue="">
              <option value="" disabled>Escolha um tipo sanguíneo</option>
              {Object.keys(bloodCompatibilityData).map((bloodType) => (
                <option key={bloodType} value={bloodType}>
                  {bloodType}
                </option>
              ))}
            </select>

            {selectedBloodType && bloodCompatibilityData[selectedBloodType] && (
              <div className="table-container">
                <table className="compatibility-table">
                  <thead>
                    <tr>
                      <th>Doar para:</th>
                      <th>Receber de:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul>
                          {bloodCompatibilityData[selectedBloodType].donateTo.map((type) => (
                            <li key={type}>{type}</li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul>
                          {bloodCompatibilityData[selectedBloodType].receiveFrom.map((type) => (
                            <li key={type}>{type}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Botão para fechar o pop-up */}
            <button className="close-popup" onClick={togglePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodTypePopup;
