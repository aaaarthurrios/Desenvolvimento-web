const valores = [7.7, 8.9, 6.3, 9.2]; // Declara um array com quatro números
console.log(valores[0], valores[3]); // Exibe os elementos nos índices 0 e 3
console.log(valores[4]); // Tenta acessar o índice 4, que não existe (resultado: undefined)
valores[10] = 10; // Atribui o valor 10 ao índice 10, criando lacunas no array
console.log(valores); // Exibe o array completo, incluindo lacunas
console.log(valores.length); // Exibe o tamanho do array, contando todos os índices/
valores.push({ id: 3 }, false, null, 'teste'); // Adiciona vários valores ao final do array
console.log(valores); // Exibe o array após a operação `push`
console.log(valores.pop()); // Remove e retorna o último elemento do array
delete valores[0]; // Remove o elemento no índice 0, deixando `undefined` no lugar
console.log(valores); // Exibe o array após a remoção
console.log(typeof valores); // Exibe o tipo da variável `valores` (array é um "object")