import React, { createContext, useContext, useState } from 'react';

// Defina a interface para o contexto do usuário
interface DoadorContextProps {
    doador: any;
    setDoador: (doador: any) => void;
}

const DoadorContext = createContext<DoadorContextProps | undefined>(undefined);

// Crie um provedor para o contexto
export const DoadorProvider = ({ children }: { children: React.ReactNode }) => {
    const [doador, setDoador] = useState(null);

    return (
        <DoadorContext.Provider value={{ doador, setDoador }}>
            {children}
        </DoadorContext.Provider>
    );
};

// Custom hook para acessar o contexto
export const useDoador = () => {
    const context = useContext(DoadorContext);
    if (!context) {
        throw new Error('useDoador deve ser usado dentro de um DoadorProvider');
    }
    return context;
};
