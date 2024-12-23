const obj = {a: 1, b: 2, c: 3, soma() { return this.a + this.b + this.c; }};
console.log(JSON.stringify(obj)); // Isso não incluirá o método 'soma'

// Usando JSON.parse corretamente
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // JSON válido com aspas duplas

// Corrigindo JSON malformado
// JSON.parse('{"A"}'); // Isso causaria erro, porque a chave não está associada a um valor.
// Para corrigir, a chave precisa ter um valor:
console.log(JSON.parse('{"A": 1}')); // JSON válido
