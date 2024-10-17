export const ModuloApi = {

    CarregarUsuarios: async () => {
        let response = await fetch('http://localhost:3001/doadores');
        let json = await response.json();
        return json;
    },

    AdicionarUsuario: async (
        ID: string,
        NOME: string,
        EMAIL: string,
        TELEFONE: string,
        SENHA: string,
        DATANASCIMENTO: Date,
        TIPOSANGUINEO: string
    ): Promise<boolean> => {
        try {
            let response = await fetch('http://localhost:3001/doadores', {
                method: 'POST',
                body: JSON.stringify({
                    ID,
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

RealizarLogin: async() => {
    let response = await
    fetch('http://localhost:3001/pagelogin');
    let json = await response.json();
    return json;

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


