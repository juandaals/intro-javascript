import { getHeroeById } from "./bases/08-impor";


// traemos el heroe con el getHeroeById
// despues el resolve ponemos el heroe puede ser cualquier nombre no importa

//el resolve trae todo al then, donde se pone el argumento del heroe y lo llamamos  'heroe',heroe
/* const promesa = new Promise((resolve, reject) => {

setTimeout(() => {
const heroe = getHeroeById(2);
resolve(heroe);
}, 2000);

});

promesa.then(( heroe ) => {
console.log('heroe',heroe)
})
//ponemos el catch para que manejar el error
.catch( err => console.warn( err )); */


//traemos el id es lo unico diferente para enviarlo a la promesa
const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
        const p1 = getHeroeById( id );
        if(p1) {
            resolve(p1);
        }else{
reject('No existe un heroe con ese id');
        }
        
        }, 2000);
        
        });
}
getHeroeByIdAsync(2)
.then( heroe => console.log('Heroe', heroe))
.catch( err => console.warn( err ));