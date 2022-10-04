/* **Valores únicos**
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.
Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(param) {
    let duplicatedItems = [];
    
    //con este bucle localizo los elementos que están duplicados comprobando la posición dentro del array. si lo encuentra lo añade a la array vacía (duplicatedItems).
    param.forEach(element => {
        if (param.indexOf(element) !== param.lastIndexOf(element)) {
            duplicatedItems.push(element);
        }
    });

    //Por cada (duplicatedItem) se crea y se reemplaza en (result) una array sin el elemento duplicado actual (duplicated)
    let result = param;
    duplicatedItems.forEach(duplicated => {
        result = result.filter(item => item !== duplicated);
    })
    
    return result;
  }

  console.log(removeDuplicates(duplicates));