console.log(this === global)
console.log(this === module)


console.log(this === module.exports)

function logThis(){
    console.log("Dentro de uma funcão... ")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = " ... "
}

logThis()