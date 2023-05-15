//Armar una función que reciba dos cadenas. 
// Una de las cadenas son joyas que representan los tipos de piedras preciosas que tenemos.
// La otra cadena representa las piedras es un tipo que tenemos. Queremos saber cuántas de las piedras son también joyas.

function myFunction(jewels: string, stones: string): number {
    const setOfJewels = new Set(jewels);
    let counter = 0;
  
    for (const stone of stones) {
      if (setOfJewels.has(stone)) {
        counter++;
      }
    }
  
    return counter;
  }
  

console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);
