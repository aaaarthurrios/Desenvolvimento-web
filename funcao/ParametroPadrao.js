function soma1 (a,b,c){

    a = a || 1
    b = b || 1
    c = c || 1

return a + b + c
}

console.log(soma1())





function somarPontoExtra(notaAluno, pontoExtra = 0.5) {
    const notaComAcrescimo = notaAluno + pontoExtra;
    return notaComAcrescimo;
}
console.log("A nota final do aluno foi: " + somarPontoExtra(7.8));



function exibirDados({ nome = "Desconhecido", idade = 0 } = {}) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}
exibirDados(); // Nome: Desconhecido, Idade: 0