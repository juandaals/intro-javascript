const persona = {
nombre: 'tony',
apellido: 'stark',
edad:45,
direccion:{
    ciudad:'New York',
    zip:65435126,
    lat:14.165,
    lng:35.41351
     }
};


// si no lo hacemos con los 3 puntos no crearemos un clon, y esa mutacion al poner los clg juntos dara como resultado tony ya que
//persona 1 tiene guardado tony en memoria y al no crear un nuevo objeto persona2, se modifica el objeto persona1
const persona2 = {...persona};
persona2.nombre = 'juan';

console.log(persona);
console.log(persona2);