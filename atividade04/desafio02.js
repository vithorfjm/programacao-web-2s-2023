const prompt = require('prompt-sync')();

function Aluno (nome, notas) {
    this.nome = nome;
    this.notas = notas;
    this.calcularMedia = () => {
        let soma = 0;
        notas.forEach(nota => soma+=nota);
        return soma/notas.length;
    }
    this.status = this.calcularMedia() < 7 ? "REPROVADO" : "APROVADO"
}

const nome = prompt("Digite o nome do aluno:");
const notasString = prompt("Digite as notas do aluno separadas por virgulas:").split(",");
const notasFloat = notasString.map(nota => parseFloat(nota));
const aluno = new Aluno(nome, notasFloat);

console.log(`O aluno ${aluno.nome} alcançou média ${aluno.calcularMedia()} e portanto está ${aluno.status}`)
