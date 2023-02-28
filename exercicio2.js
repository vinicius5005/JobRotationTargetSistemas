
let numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
let numeroAnterior = 0;
let numeroAtual = 1;

// Inicia um loop que calcula a sequência de Fibonacci até o número informado pelo usuário
while (numeroAtual < numero) {

  let proximoNumero = numeroAnterior + numeroAtual;
  

  numeroAnterior = numeroAtual;
  numeroAtual = proximoNumero;
}


if (numeroAtual == numero) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}
