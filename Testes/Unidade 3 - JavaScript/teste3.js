/* AULA 06 - Funções */
function mensagem(nome) {
    console.log("Hello World and " + nome + "!");
}

mensagem("Marcos");

function soma(a, b) {

    return a + b;
}

let total = soma(2, 3);
console.log(total);

function soma2(a = 0, b = 0) {      // Inserir valores padrões para evitar erros

    return a + b;
}

total = soma2(2);
console.log(total);

let soma3 = function (a, b) {        // Função Anônima
    return a + b;
}

console.log(soma3(10, 11));         // Podemos fazer a chamada da função por meio da variável que referencia

let executa = function (fn, op1, op2) {
    return fn(op1, op2);
}

let resultado = executa(soma, 50, 15);
console.log(resultado);

let f = function rFatorial(n) {

    if (n == 0 || n == 1) {

        return 1;
    } else {

        return n * rFatorial(n - 1);
    }
}

console.log(f(4));

// ARROW FUNCTIONS - Funções Seta

let soma4 = (a, b) => a + b;        // soma4 == soma (linha 8)
console.log(soma4(5, 17));

// ARROW FUNCTIONS - Funções Seta

// IIFE (Immediatly Invoked Function Expressions) - Expressão de Função

console.log(
    (function(a, b) {
        return a + b;
    }), (4, 5)
);

// IIFE (Immediatly Invoked Function Expressions) - Expressão de Função 