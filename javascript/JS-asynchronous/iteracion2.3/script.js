/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

const baseUrl = 'https://api.nationalize.io';
const container = document.querySelector('.container');
const button = document.querySelector('#searchButton');
button.addEventListener('click', () => {
  const input = document.querySelector('#nameInput');
  const url = `${baseUrl}?name=${input.value}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.country.forEach((element) => {
        const countryItem = document.createElement('p');
        countryItem.innerHTML = `El nombre ${data.name} tiene un ${element.probability} porciento de ser de ${element.country_id}`;
        container.appendChild(countryItem);
      });
    });
});
