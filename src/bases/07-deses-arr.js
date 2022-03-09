/* eslint-disable react-hooks/rules-of-hooks */

const personajes = ['Goku', 'Vegeta','Trunks'];
//colocando una coma indico que me ignore la posicion
const [ , , p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
return ['ABC', 123];
}
//transforma en dos variables el arreglo
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const usState = (valor) => {
return [ valor, () => {console.log('Hola Mundo')}];
}

const [ nombre, setNombre ] = usState( 'Goku' );

console.log( nombre );
setNombre();
