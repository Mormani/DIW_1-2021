/* AULA 03 - Operadores de Incremento e Concatenação */
let a = +"12";        // Assegurar um valor numérico, converter de string para número
let b = 12;

console.log
(`O tipo de a é ${typeof a}, contendo o valor ${a}
O tipo de b é ${typeof b}, contendo o valor ${b}`);

console.log(`\nPré-decremento: y = --${a} * 2`);
let y = --a * 2;      // Pré-decremento: a = a - 1 -> y = a * 2

console.log
(`y = ${y}
a = ${a}`);

console.log(`\nPós-decremento: y = ${a}-- * 2`);
a = 12;
    y = a-- * 2;      // Pós-decremento: y = a * 2 -> a = a - 1

console.log
(`y = ${y}
a = ${a}`);

b=5;

console.log(`\nPré-incremento: z = ++${b} * 2`);
let z = ++b * 2;      // Pré-incremento: b = b + 1 -> z = b * 2

console.log
(`z = ${z}
b = ${b}`);

console.log(`\nPós-incremento: z = ${b}++ * 2`);
b = 12;
    z = b++ * 2;      // Pós-incremento: z = b * 2 -> b = b + 1

console.log
(`z = ${z}
b = ${b}\n`);

let nome = "José";
let sobreNome = "Pereira";
let nomeCompleto = nome + ' ' + sobreNome;
console.log(nomeCompleto);

/* AULA 04 - Operadores Relacionais e lógicos */

console.log(`\n"" == false => `, "" == false);  // true, pois strings vazias são falsas
console.log(`"1" == 1 => `, "1" == 1);
console.log(`true == 1 => `, true == 1);

// O operador === compara valores e tipos, nomeado de "estritamente igual"

console.log(`\n"" === false => `, "" === false);                // false
console.log(`"1" === 1 => `, "1" === 1);                        // false
console.log(`true === 1 => `, true === 1);                      // false

console.log(`\nnull == undefined =>`, null == undefined);       // true
console.log(`null === undefined =>`, null === undefined);       // true

var a1;
console.log(`\na1 == null =>`, a1 == null);                     // true
console.log(`a1 == undefined =>`, a1 == undefined);             // true
console.log(`\na1 === null =>`, a1 === null);                   // false, pois ela nao recebeu o valor null
console.log(`a1 === undefined =>`, a1 === undefined);           // true

/* AULA 05 - Controle do fluxo de execução */
let dividendo = 12;
let divisor = 0;

let quociente = divisor != 0 ? dividendo / divisor : "Divisão por 0 é INDETERMINADO";
console.log(quociente);
