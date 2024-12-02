function tratarErroLancar(erro) {
    throw new Error("Ocorreu um erro: " + erro.message);
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroLancar(e);
    }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);  // Resultado: ROBERTO!!!

const objInvalido = { };
imprimirNomeGritado(objInvalido);  // Lança um erro tratado
