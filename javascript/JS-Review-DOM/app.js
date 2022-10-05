//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const list = document.createElement('ul');
countries.forEach(country => {
    const listItem = document.createElement('li');
    listItem.innerHTML=country;
    list.appendChild(listItem);
});
document.body.appendChild(list);
//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let removed = document.querySelectorAll(".fn-remove-me");
removed.forEach(element => {
    element.remove();
});

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const carsContainer = document.querySelector('[data-function="printHere"]');
const carsList = document.createElement('ul');
cars.forEach(car => {
    const carItem = document.createElement('li');
    carItem.innerHTML=car;
    carsList.appendChild(carItem);
});
carsContainer.appendChild(carsList);

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(countryItem => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add("country");

    const countryTitle = document.createElement('h4');
    countryTitle.innerHTML=countryItem.title;
    countryDiv.appendChild(countryTitle);

    const countryImg = document.createElement('img');
    countryImg.src = countryItem.imgUrl;
    countryDiv.appendChild(countryImg);

    let button = document.createElement('button');
    button.innerHTML = "delete country";
    countryDiv.appendChild(button);

    button.addEventListener("click", (event) => {
        countryDiv.remove();
    });

    document.body.appendChild(countryDiv);
});

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

let button = document.getElementById('deleteCountry');
button.addEventListener("click", (event) => {
    countries2.pop();
    const displayedCountries = document.querySelectorAll(".country");
    displayedCountries[displayedCountries.length - 1].remove();
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.


