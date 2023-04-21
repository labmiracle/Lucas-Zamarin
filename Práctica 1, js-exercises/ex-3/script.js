// Ejercicio 3
// • Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. 
//Crear una función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    if (typeof velocidadCrecimiento !== "number" ||
        typeof velocidadDecrecimiento !== "number" ||
        typeof alturaDeseada !== "number") {
        return "The parameters must be integer numbers."
    };

    if (velocidadCrecimiento < velocidadDecrecimiento) {
        return "Invalid data input, growth rate must be higher than decrease rate."
    };

    if (velocidadCrecimiento <= 0 || velocidadDecrecimiento <= 0 || alturaDeseada <= 0) {
        return "Invalid data input, plant height must be higher than 0."
    };

    let alturaActual = 0;
    let cantidadDeDias = 0;

    while (alturaActual < alturaDeseada) {
        alturaActual += velocidadCrecimiento;
        cantidadDeDias++;
        if (alturaActual < alturaDeseada) {
            alturaActual -= velocidadDecrecimiento;
        }
    };
    return `The plant will take ${cantidadDeDias} days to reach the desired height.`;
};

console.log(calcularDiasCrecimiento(100, 10, 1000));