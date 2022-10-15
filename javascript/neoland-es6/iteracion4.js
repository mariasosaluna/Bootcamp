/* Iteración #4: Map
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */

const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' },
];

const usersName = users.map((element) => element.name);

/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */

const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' },
];

const users2List = users2.map((element) => {
  if (element.name[0] == 'A') {
    return { ...element, name: 'Anacleto' };
  }
  return element;
});

/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' },
];

const citiesVisited = cities.map((city) => {
  if (city.isVisited == true) {
    city.name = city.name + ' (Visitado)';
  }
  return city; //Un map siempre tiene que retonar
});
