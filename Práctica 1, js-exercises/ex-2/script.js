//Ejercicio 2
//•Escribe una función recursiva sum(arr, n)que retorne la suma de los primeros n elementos del arreglo arr

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
};

console.log(sum([1, 2, 3], 3));