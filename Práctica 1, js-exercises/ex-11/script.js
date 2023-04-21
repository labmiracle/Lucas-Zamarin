//Ejercicio 11
//•Escriba una función llamada onlyUniques que pueda tomar cualquier cantidad de argumentos y devuelva un arreglo de solo los argumentos únicos

function onlyUniques(...args) {
    return [...new Set(args)];
}

console.log(onlyUniques(1, 1, 1, 2, 3, 3));