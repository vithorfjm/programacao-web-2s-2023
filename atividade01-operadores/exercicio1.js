let numero1 = 20;
let numero2 = 5;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let operacoes = [soma, subtracao, multiplicacao, divisao];
let nomes = ["soma", "subtração", "multiplicação", "divisão"];

for (let i = 0 ; i < 4 ; i++) {
    console.log(`Resultado da ${nomes[i]} entre ${numero1} e ${numero2} é ${operacoes[i]}.`);
}