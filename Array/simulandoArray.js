const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };

console.log(quaseArray); // Exibe o objeto quase array

Object.defineProperties(quaseArray, {
  toString: {
    value: function() {
      return Object.values(this).join(', '); // A função toString retorna os valores do objeto como string
    },
    enumerable: false // Opcional, tornando o toString não enumerável
  }
});

console.log(quaseArray[0]); // Exibe o valor do índice 0: 'Rafael'

// Exibe a representação do objeto com a nova função toString
console.log(quaseArray.toString()); // "Rafael, Ana, Bia"

// A variável `meuyArray` não está definida, então isso causaria um erro. Vamos removê-la.
