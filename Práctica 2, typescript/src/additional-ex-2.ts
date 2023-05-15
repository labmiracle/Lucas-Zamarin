// Ejercicio 2
// 1.   Vamos a implementar el juego de Code Breaker. El juego comienza generando un número al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
// 2.	El usuario ingresa un número intentando adivina el número secreto
// 3.	Si alguno de los números concuerda en la posición original, se muestra una X
// 4.	Si alguno de los números no concuerda con la posición original, pero esta en el número secreto en otra posición, muestra un –
// 5.	El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)
// 6.	Ejemplo: Número secreto: 2561
// Primer intento: 1334
// Salida: -
// Segundo intento: 4251
// Salida: X—
// Tercer intento: 6521
// Salida: XX--...


function generateSecretNumber(): number[] {
    const secretNumber: number[] = [];
    for (let i = 0; i < 4; i++) {
      secretNumber.push(Math.floor(Math.random() * 7));
    }
    return secretNumber;
  }
  
  function checkGuess(secretNumber: number[], guess: number[]): string {
    let result = '';
    const checked: boolean[] = [false, false, false, false]; 
  
  
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secretNumber[i]) {
        result += 'X';
        checked[i] = true;
      }
    }
  
    for (let i = 0; i < 4; i++) {
      if (!checked[i]) {
        if (secretNumber.includes(guess[i])) {
          result += '-';
        }
      }
    }
  
    return result;
  }
  
  function playCodeBreaker(): void {
    const secretNumber = generateSecretNumber();
    const maxAttempts = 10;
    let attempts = 0;
    let guessed = false;
  
    alert(`Let's start the Codebreaker game! Try to guess the secret number of 4 digits between 0-6.`);
  
    while (!guessed && attempts < maxAttempts) {
      const guessInput = prompt('Try to guess the secret number:');
      const guess = guessInput ? guessInput.split('').map(Number) : [];
  
      if (guess.length !== 4 || guess.some((digit) => digit < 0 || digit > 6)) {
        alert('You entered an invalid number. Try with a 4 digit number between 0-6.');
        continue;
      }
  
      attempts++;
  
      const result = checkGuess(secretNumber, guess);
      alert(`Salida: ${result}`);
  
      if (result === 'XXXX') {
        alert(`Congratulations! You guessed the secret number in ${attempts} tries!`);
        guessed = true;
      }
    }
  
    if (!guessed) {
      alert(`You ran out of tries (${maxAttempts}). The secret number was: ${secretNumber.join('')}.`);
    }
  }
  
  playCodeBreaker();
  
  
  