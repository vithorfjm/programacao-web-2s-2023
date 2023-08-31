function multiplicarMatrizes(matriz1, matriz2) {
    if (matriz1[0].length != matriz2.length) return "Não é possível calcular";

    let multiplicacao = [];

    for (let k = 0; k < matriz1.length; k++) {

        multiplicacao.push([])
        for (let i = 0; i < matriz1.length; i++) {
            let soma = 0;
            for (let j = 0; j < matriz1[0].length; j++) {
                soma += matriz1[k][j] * matriz2[j][i];
            }
            multiplicacao[k].push(soma);
        }
    }
    return multiplicacao;
}

const matriz3x2 = [
    [1, 2],
    [3, 4],
    [5, 6]
]

const matriz2x3 = [
    [1, 3, 5],
    [2, 4, 6]
]

console.log("\nMatriz 2x3 * Matrix 3x2:");
let multiplicacao = multiplicarMatrizes(matriz2x3, matriz3x2);
console.table(multiplicacao);

console.log("\nMatriz 3x2 * Matrix 2x3:");
multiplicacao = multiplicarMatrizes(matriz3x2, matriz2x3);
console.table(multiplicacao);

console.log("\nMatriz 2x3 * Matrix 2x3:");
multiplicacao = multiplicarMatrizes(matriz2x3, matriz2x3);
console.table(multiplicacao);

console.log(`\n[1 3] * [2 2]
[2 5]   [0 1]:`);
multiplicacao = multiplicarMatrizes(
    [
        [1, 3],
        [2, 5]
    ],
    [
        [2, 2],
        [0, 1]
    ]
);
console.table(multiplicacao);
