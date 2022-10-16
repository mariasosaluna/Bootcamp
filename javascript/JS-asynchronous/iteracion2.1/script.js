/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */

const baseUrl = 'https://api.nationalize.io';

const button = document.querySelector('#searchButton');
button.addEventListener('click', () => {
  const input = document.querySelector('#nameInput');
  const url = `${baseUrl}?name=${input.value}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
