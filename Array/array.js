console.log(typeof Array, typeof new Array, typeof []);
// Saída: function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);
// Saída: ['Bia', 'Carlos', 'Ana']

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);
// Saída: Bia, Carlos, Ana, undefined

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);
// Saída: 5

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados);
// Saída: 10, true, [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort();
console.log(aprovados);
// Saída: [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael' ]

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);
// Saída: undefined, Bia
