function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));  // Resultado: { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false)); // Resultado: { comprarSorvete: true, comprar