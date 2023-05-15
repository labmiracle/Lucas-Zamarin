//Ejercicio 3
// Vamos a crear un juego de cartas en el cual cada jugador saca una carta del mazo y el que obtiene el número más alto gana.
// 1.Tener en cuenta que al sacar una carta del mazo, no puede salir la misma carta, por lo menos mientras se esté utilizando ese mazo
// 2.Las cartas que saca cada jugador deben salir en orden aleatorio

type Card = number;
type Deck = Card[];

function createDeck(): Deck {
  const deck: Deck = [];
  for (let i = 1; i <= 10; i++) {
    deck.push(i);
  }
  return deck;
}

function drawCard(deck: Deck): Card {
  if (deck.length === 0) {
    throw new Error("No cards left in deck.");
  }
  const randomIndex = Math.floor(Math.random() * deck.length);
  return deck.splice(randomIndex, 1)[0];
}

function playGame(player1Name: string, player2Name: string): void {
  console.log("Let's start the game!");

  const deck: Deck = createDeck();

  const card1: Card = drawCard(deck);
  const card2: Card = drawCard(deck);

  console.log(`${player1Name} drew ${card1}`);
  console.log(`${player2Name} drew ${card2}`);

  if (card1 > card2) {
    console.log(`${player1Name} is the winner!`);
  } else if (card1 < card2) {
    console.log(`${player2Name} is the winner!`);
  } else {
    console.log("It's a draw. Nobody wins.");
  }
}

playGame("Player 1", "Player 2");