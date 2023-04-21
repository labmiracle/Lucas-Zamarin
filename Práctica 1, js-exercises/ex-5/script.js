// Ejercicio 5
// • Crea una función que reciba una cadena y la devuelva en camelCase

function camelize(str) {

    if (typeof str !== 'string') {
        return console.log('You must use a string as a parameter.');
    };

    const arrayPalabras = str.split(' ');
    arrayPalabras[0] = arrayPalabras[0].charAt(0).toLowerCase() + arrayPalabras[0].slice(1);

    for (let i = 1; i < arrayPalabras.length; i++) {
        arrayPalabras[i] = arrayPalabras[i].charAt(0).toUpperCase()
            + arrayPalabras[i].slice(1);
    }

    return arrayPalabras.join('');
};

console.assert(camelize('Hola a todos que tal') === 'holaATodosQueTal');