class Avo {
     constructor(sobrenome){
        this.sobrenomef = sobrenome
     }
}

class  Pai extends Avo{
       constructor (sobrenome, profissao = 'professor'){
        super (sobrenome)
        this.profissao  = profissao
       }
}
class Filho extends Pai {
    constructor (){
        super('Silva')
    }
}

const filho = new Filho 
console.log(filho)