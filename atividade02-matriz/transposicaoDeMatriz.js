function transposicaoMatriz(matriz) {

    let matrizTransposta = [];

    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        matrizTransposta.push([]);
        for (let linha = 0; linha < matriz.length; linha++) {
            matrizTransposta[coluna].push(matriz[linha][coluna]);
        }
    }

    return matrizTransposta;
}

let matriz = [[1, 2], [3, 4], [5, 6]];
let matrizTransposta = transposicaoMatriz(matriz)

console.log("Matriz inicial:");
console.table(matriz);

console.log("")

console.log("Matriz transposta:");
console.table(matrizTransposta);

