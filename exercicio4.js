
let faturamentoSP = 67836.43;
let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutros = 19849.53;


let valorTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;


console.log("Percentual de representação de cada estado no valor total mensal da distribuidora:");
console.log("SP: " + (faturamentoSP / valorTotal * 100).toFixed(2) + "%");
console.log("RJ: " + (faturamentoRJ / valorTotal * 100).toFixed(2) + "%");
console.log("MG: " + (faturamentoMG / valorTotal * 100).toFixed(2) + "%");
console.log("ES: " + (faturamentoES / valorTotal * 100).toFixed(2) + "%");
console.log("Outros: " + (faturamentoOutros / valorTotal * 100).toFixed(2) + "%");