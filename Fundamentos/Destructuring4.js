function rand({ min = 0, max = 1000 } = {}) {
    if (min > max) {
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // Exemplo de uso com objeto { max: 50, min: 40 }

console.log(rand({ min: 955 })); // Exemplo de uso com objeto { min: 955 }

console.log(rand({})); // Exemplo de uso com objeto vazio

console.log(rand()); // Exemplo de uso sem argumento
