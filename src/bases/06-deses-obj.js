//Desestructuracion

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado"
 
};

const { nombre, edad, clave } = persona;
//console.log(nombre);
//console.log(edad);
//console.log(clave);

const usContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.5,
        lng: -35.545,
      },
  };
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const { nombreClave, anios, latlng:{lat,lng}} = usContext(persona);

console.log(nombreClave, anios );
console.log(lat,lng);
