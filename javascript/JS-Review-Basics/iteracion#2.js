/* **Mix Fors**

Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios. */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let volumenAmount = 0; // se crean 2 arrays para la cantidad de valores y la suma de todos ellos.
let volumenTotal = 0;

for (const user of users) { 
    
    for (const soundIndex in user.favoritesSounds) {  // recorre las propiedades de (favoriteSounds) obteniendo el indice.
      
      volumenTotal += user.favoritesSounds[soundIndex].volume; // a la variable se le va sumando el valor de la propiedad volume.
      volumenAmount++; // va sumando 1 por cada volume que encuentra.
    }
}

    console.log(volumenTotal/volumenAmount);

