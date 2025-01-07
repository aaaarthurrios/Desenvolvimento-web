const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const chineses = f => f.pais === "China";
const mulheres = f => f.genero === "F";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url)
  .then(response => {
    const funcionarios = response.data;

    // mulher chinesa com menor salário?
    const mulheresChinesas = funcionarios.filter(chineses).filter(mulheres);

    if (mulheresChinesas.length === 0) {
      console.log("Nenhuma mulher chinesa encontrada.");
      return; // Importante: Sai da função para evitar erro no reduce
    }

    const func = mulheresChinesas.reduce(menorSalario);

    console.log(func);
  })
  .catch(error => {
    console.error("Erro ao obter os dados:", error);
  });