// Ejercicio 3.6
// Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos funciones.
// Arreglar los errores

const multiply: (val1: number, val2: number) => number = function (val1: number, val2: number): number {
    return val1 * val2;
  };

const capitalize: (val:string) => string = function (val: string): string {
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
}

console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));

