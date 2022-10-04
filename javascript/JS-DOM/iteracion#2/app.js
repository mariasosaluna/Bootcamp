//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoDiv = document.createElement('div'); 
document.body.appendChild(nuevoDiv); 
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let nuevoDiv2 = document.createElement('div'); 
let parrafo = document.createElement('p');
nuevoDiv2.appendChild(parrafo);
document.body.appendChild(nuevoDiv2); 
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let nuevoDiv3 = document.createElement('div');
for (let i = 0; i < 6; i++) {
    let p = document.createElement('p');
    nuevoDiv3.appendChild(p);
}
document.body.appendChild(nuevoDiv3);
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let parrafoNuevo = document.createElement('p');
let texto = document.createTextNode('Soy dinámico');
parrafoNuevo.appendChild(texto);
document.body.appendChild(parrafoNuevo);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let myH2 = document.querySelector(".fn-insert-here");
let texto2 = document.createTextNode('Wubba Lubba dub dub');
myH2.appendChild(texto2);
document.body.appendChild(myH2);
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let newList = document.createElement("ul");
apps.forEach(element => {
    let listElement = document.createElement("li");
    let textoLi = document.createTextNode(element);
    listElement.appendChild(textoLi);
    newList.appendChild(listElement);
});
document.body.appendChild(newList);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let myNodes = document.querySelectorAll(".fn-remove-me");
myNodes.forEach(element => {
    element.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let myDivs = document.querySelectorAll("div");
let parrafoNuevo2 = document.createElement('p');
let texto3 = document.createTextNode('Voy en medio');
parrafoNuevo2.appendChild(texto3);
document.body.insertBefore(parrafoNuevo2, myDivs[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let allP = document.querySelectorAll(".fn-insert-here");
allP.forEach(element => {
    let parrafo3 = document.createElement("p");
    let texto4 = document.createTextNode("Voy dentro!");
    parrafo3.appendChild(texto4);
    element.appendChild(parrafo3);
});







