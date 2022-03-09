const nombre = 'fernando';
const apellido = 'gonzalez';

//const nombreCompleto
const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

function getSaludo (nombre) {
    return 'Hola ' + nombre;
}

console.log(`Esta es un saludo: ${getSaludo(nombre)}`);