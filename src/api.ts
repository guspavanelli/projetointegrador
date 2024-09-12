export const MeuModuloApi = {

CadastrarUsuarios: async() => {
    let response = await
    fetch('');
    let json = await response.json();
    return json;

},


RealizarLogin: async() => {
    let response = await
    fetch('');
    let json = await response.json();
    return json;

},

RealizarCheckin: async() => {
    let response = await
    fetch('');
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