//Ejercicio 9
//• Escriba una función llamada addOnlyNums que pueda aceptar cualquier cantidad de argumentos (incluidos números o cadenas) y devuelva la suma de solo los números

function addOnlyNums(...args) {
    let sumTotal = 0;
    for (let arg of args) {
        if (typeof arg === 'number' && !isNaN(arg)) {
            sumTotal += arg;
        }
    }
    return sumTotal;
}

console.log(addOnlyNums(1, 2, 3, "example", 5));