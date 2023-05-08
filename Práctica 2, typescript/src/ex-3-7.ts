//Ejercicio 3.7
// 1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear erroresen tiempo de compilación en lugares donde se agregan valores incorrectos a una coleccióndeterminada. Fije estos valores a los tipos correctos)
// 2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar en artículos y colecciones de cualquier tipo mientras se continúa aplicando que coincidan

const numberCollection: number[] = []; 
const stringCollection: string[] = [];

function pushToCollection<T>(item: T, collection: T[]): T[] { 
	collection.push(item);
	return collection;
}

// Anadir algunas cosas a las colecciones 
pushToCollection('false', stringCollection);
pushToCollection('hi', stringCollection);
pushToCollection('[]', stringCollection);

pushToCollection(1, numberCollection);
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);
const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log("[Ejercicio 3.7]", `[${incrementedByTwo}] debe ser igual a [3,4,5]`);



