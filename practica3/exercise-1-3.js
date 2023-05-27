//Ejercicio 1.3
//Escriba una función que tome una cadena de ADN (por ejemplo, ’CTAGGGTA’) y devuelva una nueva cadena con cualquier valor base de ADN no canónico eliminado. Los valores base canónicos son caracteres únicos: ’C’, ’T’, ’A’ y ’G’ únicamente. Haga que la función distinga entre mayúsculas y minúsculas, lo que significa que ’c’ (minúsculas) debe eliminarse de la cadena, pero ’C’ (mayúsculas) es correcto y debe permanecer. 
// Si la cadena de ADN está vacía, simplemente devuelva una cadena vacía.

function cleanDNA(dnaString) {
    if (typeof dnaString !== 'string') {
        throw new Error('The DNA string must be a character string.');
    }

    const canonical = ['C', 'T', 'A', 'G'];
    let cleanedString = '';

    for (let i = 0; i < dnaString.length; i++) {
        const base = dnaString[i];
        if (canonical.includes(base.toUpperCase())) {
            cleanedString += base;
        }
    }

    return cleanedString;
}

module.exports = cleanDNA;