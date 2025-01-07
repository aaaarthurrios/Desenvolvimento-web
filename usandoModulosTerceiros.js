const _ = require('lodash');  // Usando o Lodash corretamente

// Usando setInterval para gerar um número aleatório a cada 2 segundos
setInterval(() => {
  console.log(_.random(1, 1000));  // Gera um número aleatório entre 1 e 1000
}, 2000);  // 2000 milissegundos = 2 segundos
