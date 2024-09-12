export const MeuModuloApi = {

CadastrarUsuarios: async() => {
    let response = await
    fetch('http://localhost:3001/pagecadastro');
    let json = await response.json();
    return json;

},


RealizarLogin: async() => {
    let response = await
    fetch('http://localhost:3001/pagelogin');
    let json = await response.json();
    return json;

},

RealizarCheckin: async() => {
    let response = await
    fetch('http://localhost:3001/checkin');
    let json = await response.json();
    return json;

},

RealizarLogoff: async() => {
    let response = await
    fetch('');
    let json = await response.json();
    return json;

},































}