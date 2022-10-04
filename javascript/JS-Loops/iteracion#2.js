/* **Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. 
Una vez lo tengas compruébalo con un ***console.log***. 
Puedes usar este array para probar tu función:*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
// Con (.map) recorremos todos los objetos hijos modificando el original, añadiendole la propiedad (isApproved)
alumns.map((alumn) => {
    if (alumn.T1 && alumn.T2 || alumn.T2 && alumn.T3 || alumn.T1 && alumn.T3) {
        alumn.isApproved = true; 
    } else {
        alumn.isApproved = false;
    } 
    return alumn;
})



console.log(alumns);