//Ejercicio 10
//•Escriba una función llamada combineTwoArrays que tome dos arreglos como argumentos y devuelva un solo arreglo que combine ambos (usando el operador...)

function combineTwoArrays(firstArray, secondArray) {
    return [...firstArray, ...secondArray];
};

console.log(combineTwoArrays([1, 2, 3, 4], [5, 6, 7, 8]));