//Ejercicio 3.4
//Añadir tipos explícitos a los parámetros y tipo de retorno
//Añadir un saludo predeterminado: "hola"

function greet(greeting = 'hola'): string {
    return greeting.toUpperCase();
  }
  
  const defaultGreeting: string = greet();
  const portugueseGreeting: string = greet('Oi como vai!');
  
  console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
  
    