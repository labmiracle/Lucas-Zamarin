//Ejercicio 12
//• Vamos a armar el juego de ”Adivinar el número”. El juego consiste de los siguiente:
// La computadora genera un número aleatorio entre 1 y 10. Luego nos pide que adivinemos el número. Si el número que ingresamos es menor que el que genero la maquina nos muestra el mensaje ”El número es mayor”. 
// Si el número que ingresamos es mayor nos muestra el mensaje ”El número es menor”. Cuando hayamos acertado el valor nos informa del fin del juego.

function adivinaElNum() {
    let numSecreto = Math.round(Math.random() * 10); // Generar un número aleatorio entre 1 y 10
    let numUsuario;
    do {
        numUsuario = parseInt(prompt('Please enter a number between 1 and 10 to try to guess the secret one! Type 0 to exit the game.'));
        if (numUsuario === 0) {
            alert('Game over, you quit.');
            return;
        } else if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
            alert('Please enter a valid number between 1 and 10!');
        } else if (numUsuario < numSecreto) {
            alert(`The number is higher than ${numUsuario}`);
        } else if (numUsuario > numSecreto) {
            alert(`The number is lower than ${numUsuario}`);
        }
    } while (numUsuario !== numSecreto);
    alert(`Success!! The secret number was ${numSecreto}. You won the game!`);
}

//Descomentar esta llamada a la función si se quiere jugar a la versión sin niveles de dificultad:
//adivinaElNum();

// •Agregue al juego anterior niveles de dificultad.

function adivinaElNumConDificultad() {
    let nivelDeDificultad = parseInt(prompt('Please select a difficulty level: \n1. Easy (9 tries available)\n2. Medium (6 tries available)\n3. Hard (3 tries available)'));

    let numIntentos;
    switch (nivelDeDificultad) {
        case 1:
            numIntentos = 9;
            break;
        case 2:
            numIntentos = 6;
            break;
        case 3:
            numIntentos = 3;
            break;
        default:
            alert('Please select a valid difficulty level.');
            adivinaElNumConDificultad();
            return;
    }

    let numSecreto = Math.round(Math.random() * 10) + 1;
    let numUsuario;
    let intentos = 0;

    do {
        numUsuario = parseInt(prompt(`Please enter a number between 1 and 10 to try to guess the secret one! There are ${numIntentos - intentos} tries left. Enter 0 to exit the game.`));
        if (numUsuario === 0) {
            alert('Game over, you quit.');
            return;
        }
        if (isNaN(numUsuario) || numUsuario < 1 || numUsuario > 10) {
            alert('Please enter a valid number between 1 and 10!');
        } else if (numUsuario < numSecreto) {
            alert(`The number is higher than ${numUsuario}.`);
            intentos++;
        } else if (numUsuario > numSecreto) {
            alert(`The number is lower than ${numUsuario}.`);
            intentos++;
        } else {
            alert(`Success!! You guessed the secret number(${numSecreto}) in ${intentos + 1} tries.`);
            return;
        }
    } while (intentos < numIntentos);

    alert(`You lost the game. The secret number was ${numSecreto}.`);
};

//Descomentar esta llamada a la función si se quiere jugar a la versión con niveles de dificultad:
//adivinaElNumConDificultad(); 