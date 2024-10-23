import { useState } from 'react';
import Perfil from '../components/perfil';

function PerfilPage() {
    const [nome, setNome] = useState(''); 

    return (
        <div>
            <Perfil nome={nome} alterarNome={setNome} />
        </div>
    );
}

export default PerfilPage;
