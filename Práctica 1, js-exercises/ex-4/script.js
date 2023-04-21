// Ejercicio 4
//• Crea una función que reciba una frase como cadena y devuelva la palabra más larga:

function palabraMasLarga(str) {

    if (typeof str !== 'string') {
        return console.log('You must use a string as a parameter.');
    };

    const arrayPalabras = str.split(' ');

    let palabraMasLarga = '';

    for (let i = 0; i < arrayPalabras.length; i++) {
        const palabra = arrayPalabras[i];

        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

console.assert(palabraMasLarga('Erase una vez que se era') === 'Erase');

//• Crea una función que reciba una cadena y lo devuelva con todas las palabras con su primera letra mayúscula

function primeraMayuscula(str) {

    if (typeof str !== 'string') {
        return console.log('You must use a string as a parameter.');
    };

    const arrayPalabras = str.split(' ');

    for (let i = 0; i < arrayPalabras.length; i++) {
        arrayPalabras[i] = arrayPalabras[i].charAt(0).toUpperCase()
            + arrayPalabras[i].slice(1).toLowerCase();
    }

    return arrayPalabras.join(' ');
}

console.assert(primeraMayuscula('En un lugar de la Mancha') === 'En Un Lugar De La Mancha');