/* **Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array: */

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
    let finalToys = []; // Se crea nuevo array donde se envian los obajetos que no contengan el valor (gato)

    for (const value of toys) {
        if (!value.name.includes("gato")) {  // * ! * es una negacion, es decir, la condicion se invierte y el objeto que no la cumpla  es el que se va a (finalToys)
           finalToys.push(value);
        }
    }
    console.log(finalToys);
