//Ejercicio 1.4
//Escriba una función que tome un arreglo y devuelva la suma de todos los números positivos del arreglo. Los valores que se pueden convertir en números deben convertirse e incluirse en la suma si son positivos. Si la matriz está vacía, devuelve cero.

function sumPositiveNumbers(array) {
    if (!Array.isArray(array)) {
        throw new Error('The argument must be an array.');
    }

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const num = Number(array[i]);
        if (!isNaN(num) && num > 0) {
            sum += num;
        }
    }

    return sum;
}

module.exports = sumPositiveNumbers;