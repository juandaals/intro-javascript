  //import heroes, {owner  } from '../data/heroes.js';
  import heroes from '../data/heroes.js';



  //devuelve el indice del primer elemento de un array que cumpla la funcion de prueba proporcionada
 export  const getHeroeById = (id) => {
return heroes.find((heroe)=> heroe.id === id);  
}


export const getHeroesByOwner = (owner, name) => {
    
    const [result] = heroes.filter((heroe)=> heroe.owner === owner && heroe.name === name);
    return result || {};
}

//console.log(getHeroeById(2));
//console.log(getHeroesByOwner('Marvel', 'Spiderman'));