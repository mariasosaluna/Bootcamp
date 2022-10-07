/* Iteracion#1
Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */

const suma = (a,b) => {
console.log(a + b);
}

//1.1 Ejecuta esta función sin pasar ningún parametro
suma();

//1.2 Ejecuta esta función pasando un solo parametro
suma(1);

//1.3 Ejecuta esta función pasando dos parametros
suma(10,5);

/* Iteración #2: Destructuring

2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto. */
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);

/* 2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola. */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction(); 

console.log(name);
console.log(race);

/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: carName, itv} = car;

const [year1, year2, year3] = itv;


console.log(year1);
console.log(year2);
console.log(year3);

