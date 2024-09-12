export const MeuModuloApi = {
/* MODULO CADASTRO */
CadastrarUsuarios: async() => {
    let response = await
    fetch('http://localhost:3001/pagecadastro');
    let json = await response.json();
    return json;

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