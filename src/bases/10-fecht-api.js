const apiKey = 'BExQH3tXGRMzqTiSeWU7z1IUE9WpjYsA'

 const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

 peticion
 .then( resp =>  resp.json( ) )
 .then( ({data}) => {
// extraemos la url mediante desestructuracion     
const {url} = data.images.original;
// creamos una imagen con la url
const img = document.createElement('img');
// se agrega el src la url de la imagen para que se cargue
img.src = url;
// la agregamos al body con el append a la img para que aparezca    
document.body.append( img );
    })
     .catch( console.warn );