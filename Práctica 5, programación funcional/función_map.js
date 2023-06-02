const characters = [
    { name: 'Luke Skywalker', height: '172', mass: '77', eye_color: 'blue', gender: 'male', },
    { name: 'Darth Vader', height: '202', mass: '136', eye_color: 'yellow', gender: 'male', },
    { name: 'Leia Organa', height: '150', mass: '49', eye_color: 'brown', gender: 'female', },
    { name: 'Anakin Skywalker', height: '188', mass: '84', eye_color: 'blue', gender: 'male', }
];

//1.Obtener un arreglo de todos los nombres

const names = characters.map(character => character.name);
console.log('Ejercicio 1: ' + names);

// 2.Obtener un arreglo de todas las alturas

const heights = characters.map(character => character.height);
console.log('Ejercicio 2: ' + heights);

// 3.Obtener un arreglo de objetos con las propiedades de nombre y altura

const namesAndHeights = characters.map(character => ({ name: character.name, height: character.height }));
console.log('Ejercicio 3: ' + JSON.stringify(namesAndHeights));

