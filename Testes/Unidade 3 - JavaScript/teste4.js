/* AULA 07 - Vetores */
let frutas = ["laranja", "maçã", "banana"];
console.log(frutas);

let misturado = ["José", 35, true];
console.log(misturado);

frutas[2] = "limão";
console.log(frutas);

frutas[3] = "pêra";
console.log(frutas);

frutas[6] = "abacaxi";
console.log(frutas);
console.log(frutas.length);

frutas = [];        // frutas = new Array();

frutas[frutas.length] = "melão";
console.log(frutas);

frutas[frutas.length] = "melancia";
console.log(frutas);

frutas[frutas.length] = "morango";
frutas[frutas.length] = "uva";

for(let i = 0; i < frutas.length; i++) {
    
    console.log(i, frutas[i]);
}

frutas.sort();
console.log(frutas);

frutas.push("banana");          // Insere um elemento no fim do vetor
console.log(frutas);

let p = frutas.pop();           // Retira o elemento do fim do vetor e o retorna
console.log(p);
console.log(frutas);

frutas.unshift("banana");       // Insere um elemento no inicio do vetor
console.log(frutas);

let s = frutas.shift();         // Retira o elemento do inicio do vetor e o retorna
console.log(s);
console.log(frutas);

