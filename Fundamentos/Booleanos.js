// Declara uma variável booleana chamada 'isAtivo' e a inicializa com o valor 'false'
let isAtivo = false;

// Imprime o valor atual de 'isAtivo' no console
console.log(isAtivo); // Saída: false

// Atribui o valor 'true' à variável 'isAtivo'
isAtivo = true;

// Imprime o valor atualizado de 'isAtivo' no console
console.log(isAtivo); // Saída: true

// Atribui o valor numérico '1' à variável 'isAtivo'
isAtivo = 1;

// Aplica o operador de negação lógica (!!) duas vezes ao valor de 'isAtivo'
// Isso converte o número '1' para um valor booleano 'true'
console.log(!!isAtivo); // Saída: true

// Imprime uma mensagem no console
console.log('os verdadeiros ...');

// Aplica o operador de negação lógica (!!) a diferentes valores
// Todos esses valores são considerados verdadeiros em JavaScript
console.log(!!3);     // Saída: true
console.log(!!-1);    // Saída: true
console.log(!!'');    // Saída: false (string vazia é falsy)
console.log(!![]);    // Saída: true (array não vazio é truthy)
console.log(!!{});    // Saída: true (objeto não vazio é truthy)
console.log(!!Infinity); // Saída: true
console.log(!!(isAtivo = true)); // Saída: true (atribuição é truthy)

// Imprime uma mensagem no console
console.log("os falsos...");

// Aplica o operador de negação lógica (!!) a diferentes valores
// Todos esses valores são considerados falsos em JavaScript
console.log(!0);       // Saída: true (negação de 0 é true)
console.log(!!'');     // Saída: false (string vazia é falsy)
console.log(!!null);    // Saída: false
console.log(!!NaN);     // Saída: false
console.log(!!undefined); // Saída: false
console.log(!!(isAtivo - false)); // Saída: true (subtração resulta em 1, que é truthy)

// Imprime uma mensagem no console
console.log("pra finalizar... ");

// Utiliza o operador OR lógico (||) para encontrar o primeiro valor truthy
// Nesse caso, o primeiro valor truthy é 'Desconhecido'
console.log(!!('' || null || 0 || '')); // Saída: false (todos os valores são falsy)

let nome = '';
console.log(nome || 'Desconhecido'); // Saída: Desconhecido

// A estrutura "OU" (||) é usada para fornecer um valor padrão
// Se 'nome' estiver vazio, o valor 'Desconhecido' será usado