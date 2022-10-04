/* **Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto: */
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
/* uso string template en lugar de: detail + ": " + alien[detail] */
for (const detail in alien) {
    console.log(`${detail}: ${alien[detail]}`);
}