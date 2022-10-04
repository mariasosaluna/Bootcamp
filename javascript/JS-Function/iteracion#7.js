/**Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. 
Comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, name) {
    const indexDelElemento = array.indexOf(name);

    if (indexDelElemento > -1) {
        return [true, indexDelElemento];
    }

    return false;
  }

  console.log(finderName(nameFinder, 'Bruce'));