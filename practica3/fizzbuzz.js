// Ejercicio 1.1
// Debemos escribir una función, fizzBuzz, que acepte un número y devuelva una cadena:
// •si el número es divisible por 3, devuelve Fizz
// •si el número es divisible por 5, devuelve Buzz
// •si el número es divisible por 3 y 5, devuelve FizzBuzz
// •si el número no cumple ninguna de las condiciones anteriores, devuelve el número
// A medida que crea escribimos la función en fizzbuzz.js, también debemos escribir las pruebas en index.test.js. Debemos ir creando nuestros propios casos de prueba. 
// Casos extremos a considerar:
// •¿Qué debería devolver fizzbuzz(0)?
// •¿Qué debería pasar si a la función se le pasa una cadena?

function fizzBuzz(num) {
    if (isNaN(num) || typeof num !== 'number') {
        throw new Error('Argument must be a number.');
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num.toString();
    }
}

module.exports = fizzBuzz;