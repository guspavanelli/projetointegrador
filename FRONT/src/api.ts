export const ModuloApi = {

    CarregarUsuarios: async () => {
        let response = await fetch('http://localhost:3001/doadores');
        let json = await response.json();
        return json;
    },

    AdicionarUsuario: async (
        NOME: string,
        EMAIL: string,
        TELEFONE: string,
        SENHA: string,
        DATANASCIMENTO: string,
        TIPOSANGUINEO: string      
    ): Promise<boolean> => {
        try {
            let response = await fetch('http://localhost:3001/doadores', {
                method: 'POST',
                body: JSON.stringify({
                    NOME,
                    EMAIL,
                    TELEFONE,
                    SENHA,
                    DATANASCIMENTO,
                    TIPOSANGUINEO

                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });

            if (response.ok) {
                return true; 
            } else {
                console.error('Erro ao adicionar o item');
                return false; 
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            return false; 
        }
    },

/*MODULO LOGIN */

RealizarLogin: async (EMAIL: string, SENHA: string) => {
    try {
        let response = await fetch('http://localhost:3001/doadores/login', {  // Ajuste para a rota correta
            method: 'POST',
            body: JSON.stringify({
                EMAIL,
                SENHA
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        if (response.ok) {
            let json = await response.json();
            return json;
        } else {
            console.error('Erro ao realizar login');
            return null;  // Retorna null em caso de falha
        }
    } catch (error) {
        console.error('Erro na requisição de login:', error);
        return null;  // Retorna null em caso de erro
    }
},


/*MODULO CHECKIN */

RealizarCheckin: async() => {
    let response = await
    fetch('http://localhost:3001/checkin');
    let json = await response.json();
    return json;

},

/* MODULO LOGOFF */

RealizarLogoff: async() => {
    let response = await
    fetch('');
    let json = await response.json();
    return json;

},

}


