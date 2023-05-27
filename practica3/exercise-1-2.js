// //Ejercicio 1.2
// Escriba una función que tome un año y devuelva un valor booleano que indique si el año es un año bisiesto.
// Tener en cuenta que:
// •Los años que son divisibles por 4 son años bisiestos
// •Los años que son divisibles por 100 no son años bisiestos
// •Los años que son divisibles por 400 son años bisiestos

function isLeapYear(year) {
    if (typeof year !== 'number') {
        throw new Error('The year must be a number');
    }

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

module.exports = isLeapYear;