// Ejercicio 1
// •En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio degolpes que se espera que haga un golfista para meter la bola en un hoyo y así completarel juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existeun apodo diferente.

const names = ["Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    } else {
        return "Invalid score, please try again!"
    }
}

console.log(golfScore(5, 4));