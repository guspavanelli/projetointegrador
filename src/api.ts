export const MeuModuloApi = {
/* MODULO CADASTRO */
CadastrarUsuarios: async(userId: string,
    id: number,
    nome: string,
    username: string,
    email: string,
    senha: string) => {

    let response = await
    fetch('http://localhost:3000/pagecadastro',{
            method: 'POST',
            body:JSON.stringify
            ({
                    id,
                    nome,
                    username,
                    userId,
                    email,
                    senha, }),

        headers: {

            'Content-Type': 'application/json'
                }
     }
     );

    let json = await response.json();

    console.log(json);

    return json;
    
    },

/*MODULO LOGIN */

RealizarLogin: async() => {
    let response = await
    fetch('http://localhost:3000/pagelogin');
    let json = await response.json();
    return json;

},

/*MODULO CHECKIN */

RealizarCheckin: async() => {
    let response = await
    fetch('http://localhost:3000/checkin');
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