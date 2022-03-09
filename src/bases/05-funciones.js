 const saludar2 = (nombre) => {
return `Hola, ${nombre}`;

}


const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar2('Tony'));
console.log(saludar3('goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log({user});

//Tarea 
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    });


const usuarioActivo = getUsuarioActivo('Tony');
console.log(usuarioActivo);