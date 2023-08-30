function palavrasDistintas(palavras) {
    let arrayPalavras = palavras.split(" ");
    return arrayPalavras.filter((palavra, i) => arrayPalavras.indexOf(palavra) === i);
}

console.log(palavrasDistintas("teste teste1 teste2 teste teste1 teste2 teste3")) // >> ['teste', 'teste1', 'teste2', 'teste3']
