class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor 
    }
}

class CicloFinanceiro{
    constructor (mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }
    addLancamento(... Lancamento){
        Lancamento.forEach(l => this.Lancamento.push)

    }
    sumario(){
        let valorConsolidado = 0
        this.Lancamento.forEach(l =>{
            valorConsolidado += l.valor
        }) 
        return valorConsolidado
    }
}

const salario = new Lancamento ('Salario' , 4500)
const contaDeLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())
    
