import { useState } from 'react';
import Perfil from '../components/perfil';

function PerfilPage() {
    const [nome, setNome] = useState('Helena Hills'); // Estado do nome

    return (
        <div>
            {/* Passa o nome e a função de alteração como props */}
            <Perfil nome={nome} alterarNome={setNome} />
        </div>
    );
}

export default PerfilPage;
