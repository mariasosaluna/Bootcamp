/*2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/

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
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'X';
        countryItem.innerHTML = `El nombre ${data.name} tiene un ${element.probability} porciento de ser de ${element.country_id}`;
        removeButton.addEventListener('click', () => {
          countryItem.remove();
        });
        countryItem.appendChild(removeButton);
        container.appendChild(countryItem);
      });
    });
});
