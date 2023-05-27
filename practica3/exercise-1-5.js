//Ejercicio 1.5
//Dada una cadena, encuentre el primer carácter que se repite consecutivamente en ella y devuelva su índice.  Si no hay caracteres repetidos, devuelve -1.  Esta función debe ignorar cualquier espacio y no debe distinguir entre mayúsculas y minúsculas: trate ’a’ como equivalente a ’A’.


function findFirstRepeatIndex(str) {
    if (typeof str !== 'string') {
        throw new Error('The input must be a string.');
    }

    const formattedStr = str.replace(/\s/g, '').toLowerCase();

    for (let i = 0; i < formattedStr.length - 1; i++) {
        if (formattedStr[i] === formattedStr[i + 1]) {
            return i;
        }
    }

    return -1;
}

module.exports = findFirstRepeatIndex;