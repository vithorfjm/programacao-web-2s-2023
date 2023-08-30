const calculadora = {
    somar: (num1, num2) => num1+num2,
    subtrair: (num1, num2) => num1-num2,
    multiplicar: (num1, num2) => num1*num2,
    dividir: (num1, num2) => num1/num2,
    fatorial: (num) => {
        let fatorial = 1;
        for (let i = num; i > 1; i--) {
            fatorial *= i;
        }
        return fatorial;
    }
}

console.log(calculadora.somar(10, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));

console.log(calculadora.fatorial(3));
