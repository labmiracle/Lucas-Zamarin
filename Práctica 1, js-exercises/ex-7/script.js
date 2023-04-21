// Ejercicio 7
// • En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa si lleva un registro del número relativo de cartas altas y bajas que quedan en la baraja. Esto  se llama conteo de cartas. Tener más cartas altas en el mazo favorece al jugador. A cada carta se le asigna un valor de acuerdo con la tabla siguiente. Cuando la cuenta es positiva, el jugador debe apostar alto. Cuando la cuenta es cero o negativa, el jugador debe apostar poco. Escribe una función de conteo de cartas. Tendrá un parámetro card, que puede ser un número o una cadena, y aumentará o disminuirá la variable de conteo global de acuerdo con el valor de card. La función devolverá una cadena con el recuento actual y la cadena Bet si el recuento es positivo, o Hold si el recuento es cero o negativo. El recuento actual y la decisión del jugador(Bet o Hold) deben estar separados por un solo espacio

let count = 0;
function cc(card) {
    const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    if (!(deck.includes(card))) {
        return 'Please enter a valid card.'
    };

    if (card >= 2 && card <= 6) {
        count++;
    } else if (card === 'J' || card === 'Q' || card === 'K' || card === 'A' || card === 10) {
        count--;
    };

    if (count > 0) {
        return `${count} Bet`;
    } else {
        return `${count} Hold`;
    }
};

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));