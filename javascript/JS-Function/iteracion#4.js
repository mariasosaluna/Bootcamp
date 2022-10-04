/***Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(element) {
    let suma = 0;
    for(i = 0; i < element.length; i++){
        suma+= element[i];
    }
    return suma / numbers.length;
}
console.log(average(numbers));