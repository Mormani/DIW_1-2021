/* AULA 01 - Váriaveis */

{
    var nome = "Marcos";    //Variavel Global
    console.log(nome);
}

{
    let nome = "José";      //Variavel Local
    console.log(nome);
}

/* AULA 02 - Tipos de dados */

let num = 3 * 2 + 5;
console.log(typeof num, num);

let num2 = 1.5;
console.log(typeof num2, num2);

let bigInt = 1564846515331316876465465n;
console.log(typeof bigInt, bigInt);

let string = 'Maria';
console.log(typeof string, string);

let boolean = true;
console.log(typeof boolean, boolean);

let boolean2 = (num > 10);
console.log(typeof boolean2, boolean2);

let templateString = `Esta é uma string
       que possui
       várias linhas`;
console.log(typeof templateString, templateString);

let templateString2 = `Olá ${string}`;
console.log(templateString2);

let templateString3 = `O resultado da multiplicação
${num} por ${num2} é ${num * num2}`;
console.log(templateString3);

let undef;
console.log(typeof undef);

let nulo = null;
console.log(typeof null);
