/* **Función swap**

Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, index1, index2) {

    const firstPlayer = array[index1]; 
    array[index1] = array[index2];   // ahora el elemento1 se cambia por el 2
    array[index2] = firstPlayer;  // al dos le asigno la posicion 1. 

    return array;
}

console.log(swap(players, 1, 2));