/* AULA 08 - Objetos */
let pessoa = {

    nome: "João",
    idade: 35,
    casado: true
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);

let prop = 'nome';
console.log(pessoa[prop]);

pessoa.numeroDeFilhos = 2;
console.log(pessoa);

let pessoa2 = {};
pessoa2.nome = "Maria";
pessoa2.idade = 28;
pessoa2.casado = false;
pessoa2.numeroDeFilhos = 0;
console.log(pessoa2);

function criaPessoa(n, i, c, f) {       // Funcao cria um objeto vazio e retorna o mesmo
    
    let p = {};
    p.nome = n;
    p.idade = i;
    p.casado = c;
    p.numeroDeFilhos = f;
    return p;
}

let pessoa3 = criaPessoa("João", 35, true, 2);
let pessoa4 = criaPessoa("Maria", 28, false, 0);

console.log(1, pessoa3);
console.log(2, pessoa4);

function criaPessoa2(n, i, c, f) {      // Funcao cria um objeto literal e retorna o mesmo
    
    return {
        nome: n,
        idade: i,
        casado: c,
        numeroDeFilhos: f
    };
}

let pessoa5 = criaPessoa2("João", 35, true, 2);
let pessoa6 = criaPessoa2("Maria", 28, false, 0);

console.log(3, pessoa3);
console.log(4, pessoa4);

function Pessoa(n, i, c, f) {           // Funcao recebe valores para atribuir a um objeto ja criado pelo new

    this.nome = n;
    this.idade = i;
    this.casado = c;
    this.numeroDeFilhos = f;
    this.maiorDeIdade = () => this.idade >= 18;
}

let pessoa7 = new Pessoa("João", 35, true, 2);
console.log(5, pessoa7);
console.log(6, pessoa7.maiorDeIdade());

for(let chave in pessoa7) {

    if(typeof pessoa7[chave] != "function") {

        console.log(`O valor de "${chave}" é ${pessoa7[chave]}`);
    }
}

let pessoa8 = pessoa7;      // Cópia da referência para o Objeto
console.log(7, pessoa8);

pessoa7.nome = "José Carlos";
console.log(8, pessoa8);

let pessoa9 = {}
for(let chave in pessoa7) {

    pessoa9[chave] = pessoa7[chave];
}
console.log(9, pessoa9);

pessoa7.nome = "João";
console.log(10, pessoa7);
console.log(11, pessoa9);