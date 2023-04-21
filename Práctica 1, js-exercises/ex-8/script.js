// Ejercicio 8
// • Escriba una función que pueda tomar cualquier número de argumentos y devuelva la suma de todos los argumentos

function suma(...args) {
    let sumaTotal = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            return console.log('Error: arguments must be numbers.');
        }
        sumaTotal += args[i];
    }
    return sumaTotal;
}

console.log(suma(1, 3, 7, 8, 1));