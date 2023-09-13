const prompt = require('prompt-sync')();

const numeros = prompt("Digite 5 números separados por virgula. Exemplo: 10,20,30,40,50");

function printarNumeros(numerosStr) {
    numerosArray = numerosStr.split(",");

    // Verifica se a quantidade de números inserida está correta
    if (numerosArray.length != 5) {
        console.log("ERRO: quantidade de números inválida");
        return;
    }
    
    // Verifica se os itens passados são do tipo 'number'
    const caracteresInvalidos = [];
    numerosArray.forEach((num) => {
        if (isNaN(num)) {
            caracteresInvalidos.push(num);
        }
    })

    // Informa quais são os caracteres inválidos, caso tenha algum
    if (caracteresInvalidos.length != 0) {
        console.log(`ERRO: "${caracteresInvalidos}" não são caracteres válidos`);
        return;
    }

    // Printa os números digitados
    console.log(`Números digitados: ${numerosArray}`);

}

printarNumeros(numeros);
