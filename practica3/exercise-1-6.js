//Ejercicio 1.6
// Dada una matriz de 1s y 0s, encuentre el número máximo de 1s consecutivos en esta matriz. Si hay algún valor distinto de 1 o 0 en la matriz, es un error y devuelve -1. Los 1s y 0s pueden ser valores de cadena o enteros, ambos son aceptables y deben considerarse equivalentes.

function findMaxConsecutiveOnes(array) {
    if (!Array.isArray(array)) {
        throw new Error('The input must be an array');
    }

    let maxConsecutiveOnes = 0;
    let currentConsecutiveOnes = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element !== 1 && element !== '1' && element !== 0 && element !== '0') {
            return -1;
        }
        if (Number(element) === 1) {
            currentConsecutiveOnes++;
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentConsecutiveOnes);
        } else {
            currentConsecutiveOnes = 0;
        }
    }

    return maxConsecutiveOnes;
}

module.exports = findMaxConsecutiveOnes;