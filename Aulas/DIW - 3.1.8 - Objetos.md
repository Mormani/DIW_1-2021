# Objetos

Os objetos em JavaScript são estruturas que nos permitem representar as coisas do mundo: sejam elas reais ou abstratas. Um objeto, por exemplo, pode descrever uma pessoa, um veículo ou uma ferramenta - coisas materiais, tangíveis. Os objetos também podem descrever também coisas intangíveis, como um evento, um cargo, um negócio, uma transação e até mesmo uma aula.

Para isso, um objeto é descrito por meio de suas propriedades. Por exemplo, um objeto pode ser usado para descrever uma pessoa por meio das seguintes propriedades: nome, gênero, idade, estado civil e CPF. Da mesma forma, um objeto pode ser usado para descrever uma aula por meio dessas propriedades: disciplina, dia, hora de início, hora de término, conteúdo trabalhado e local da aula. 

Cada propriedade é descrita por meio de duas informações: o nome da propriedade, chamado de **chave**, e o **valor** dessa propriedade. Assim, um objeto é descrito por meio de um conjunto de pares de chaves e valores, ou seja, de propriedades.

Em JavaScript, podemos declarar um objeto para descrever uma pessoa dessa forma:

```js
{
    nome: 'João',
    idade: 35
}
```

Observe que as propriedades são delimitadas por chaves. Essa estrutura apresentada no exemplo é chamada em JavaScript de literal de objeto e pode ser atribuída a uma variável ou passada como parâmetro de uma função.

Veja outro exemplo de objeto, que agora representa uma música:

```js
{
    musica: "I'm Eighteen",
    artista: "Alice Cooper",
    segundos: 180
}
```

Nesse caso, usamos aspas duplas para delimitar os valores, porque um deles contém um apóstrofo. Também podemos observar que temos três propriedades, que possuem as chaves: `musica`, `artista` e `segundos` e, respectivamente, os valores `"I'm Eighteen"`, `"Alice Cooper"` e `180`.

As literais de objetos mostradas acima já possuem um conjunto de propriedades. No entanto, nós podemos acrescentar propriedades a esses objetos simplesmente atribuindo valores às suas chaves. Por exemplo, podemos criar um nova propriedade para o primeiro objeto da seguinte forma:

```js
let pessoa = { nome: 'João', idade: 35 };
pessoa.casado = true;
```

Na primeira linha desse exemplo, a literal do objeto foi escrita de uma só vez. Na segunda linha, acrescentamos a propriedade casado. Se essa propriedade já existisse, seu valor seria substituído. Mas, como é uma propriedade nova, então ela é adicionada ao objeto.

Por meio dessa adição de propriedades, podemos optar por criar objetos vazios e acrescentarmos a eles aquelas propriedades que nos interessam. Veja esse exemplo:

```js
let pessoa = {};
pessoa['nome'] = 'João';
pessoa['idade'] = 35;
pessoa['casado'] = true;
```

Criamos o objeto vazio por meio das chaves sem nenhum conteúdo interno. Também poderíamos ter criado o novo objeto usando uma função construtora:

```js
let pessoa = new Object();
```

Ainda no exemplo acima, trocamos um pouco a notação do acesso a uma propriedade. Ao invés de usarmos o `.` como separador da chave, usamos os colchetes, da mesma forma que nos vetores. Isso é possível, porque as duas formas são equivalentes:

```js
pessoa.nome
pessoa['nome']
```

Geralmente a primeira forma é mais usada. A segunda é útil quando a chave está representada por meio de uma variável, como nesse exemplo:

```js
let propriedade = 'nome';
console.log(pessoa[propriedade]);
```

Apesar de nós podermos criar objetos assim, diretamente, há uma forma mais interessante que é por meio de uma função. A função, nesse caso, receberia todos os valores necessários para a construção do objeto e retornaria o novo objeto criado. Veja como isso poderia ser feito por meio desse exemplo:

```js
function criaPessoa(n, i) {

    let p = {
        nome: n,
        idade: i
    };
    return p;
}

let p = criaPessoa('João', 35);
```

Essa função é responsável por criar o novo objeto, armazenar os valores das chaves e retornar o objeto pronto.  Observe que, dentro do objeto, as chaves são escritas na forma literal. No entanto, os valores atribuídos às chaves podem ser escritas como literais ou como variáveis.

Apesar dessa função permitir a criação de objetos, ela não é uma função construtora. Uma função construtora real funciona da seguinte forma:

```js
function Pessoa(n, i) {

    this.nome = n;
    this.idade = i;
}

let p = new Pessoa('João', 35);
```

O operador `new` cria um novo objeto vazio, que será inicializado pela função construtora `Pessoa`. Observe que geralmente escrevemos os nomes das funções construtoras com iniciais maiúsculas para diferenciá-las das demais. Como o objeto é criado pelo operador `new`, então a função não precisa criar um novo objeto. Mas essa função precisa de uma referência para esse novo objeto, por meio da qual as propriedades serão definidas. Isso é feito com o uso do operador `this`, que é uma referência para si mesmo, isto é, é uma referência que um determinado objeto faz a si mesmo. 

Finalmente, também podemos criar métodos nos objetos, que são aquelas funções que realizam alguma ação com base nos dados do próprio objeto. Nesse caso, basta atribuirmos ao nome do método uma função de expressão, como mostra esse exemplo:

```js
function Pessoa(n, i) {

    this.nome = n;
    this.idade = i;
    this.maiorDeIdade = () => this.idade >= 18;
}

let p = new Pessoa('João', 35);
console.log(p.maiorDeIdade);
```

Aqui estamos usando a notação da função seta, para que você se acostume com ela. Essa função não recebe nenhum parâmetro (por isso temos os parênteses vazios) e retornar se a propriedade idade tem valor maior ou igual a 18.