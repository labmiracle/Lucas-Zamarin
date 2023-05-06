// Ejercicio 2.3

// 1 Añadir anotaciones de tipo (‘any‘ excluido)
// 2 Inspeccione el tipo de ‘element‘ en diferentes ramas de código

const numbers: (number | number[])[] = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

function flatten(array: (number | number[])[]): number[] {
  const flattened: number[] = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      element; // number[]
      flattened.push(...element);
    } else {
      element; // number
      flattened.push(element);
    }
  }
  return flattened;
}

const flattenedNumbers: number[] = flatten(numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers);


