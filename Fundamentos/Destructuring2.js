// Desestruturação de arrays: extraindo valores de um array para variáveis individuais

// 1. Extraindo o primeiro elemento de um array
const [a] = [10];
// Aqui, estamos desestruturando o array [10] e atribuindo o valor 10 à variável 'a'.
console.log(a); // Saída: 10

// 2. Desestruturando um array com valores específicos e valores padrão
const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8];
// Aqui, estamos:
// - Atribuindo o primeiro valor (10) ao 'n1'.
// - Pulando o segundo valor (7).
// - Atribuindo o terceiro valor (9) ao 'n3'.
// - Pulando o quarto valor (8).
// - Atribuindo o quinto valor (undefined) ao 'n5'.
// - Atribuindo o valor padrão 0 ao 'n6', pois não há um sexto valor no array original.
console.log(n1, n3, n5, n6); // Saída: 10 9 undefined 0

// 3. Desestruturando um array aninhado
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
// Aqui, estamos:
// - Pulando o primeiro array completo.
// - Desestruturando o segundo array:
//   - Pulando o primeiro elemento.
//   - Atribuindo o segundo elemento (8) à variável 'nota'.
console.log(nota); // Saída: 8