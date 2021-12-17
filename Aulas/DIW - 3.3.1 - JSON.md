# JSON

JSON significa JavaScript Object Notation é o formato mais usado para a troca de dados pela Web. Um objeto JSON nada mais é que um objeto JavaScript com duas simples particularidades:

* Os nomes dos atributos dos objetos em JSON devem ser escritos entre aspas duplas (bem como os valores do tipo *string*);
* Um objeto JSON não pode conter funções.

Por exemplo, podemos ter um objeto JSON assim:

```json
let obj = { 
  "lista de produtos": [
    {
      "código": 1,
      "nome": "Torradeira",
      "preço": 134.5
    },
    {
      "código": 2,
      "nome": "Sanduicheira",
      "preço": 120.3
    },
    {
      "código": 3,
      "nome": "Refrigerador",
      "preço": 1240
    }
  ]
}
```

Como você pode perceber pelo exemplo, o nome de um atributo pode conter espaços (e por isso vem entre aspas), mas não é uma prática recomendada. 

As demais operações são exatamente como nos objetos JavaScript. Porém, não poderíamos usar o operador `.` para acessar o atributo do objeto, precisamos usar os colchetes, da seguinte forma:

```js
obj["lista de produtos"]
```

Finalmente, a linguagem JavaScript nos oferece um objeto interno JSON que nos ajuda a converter um objeto JSON em uma string (para envio pela Web), bem como nos ajuda a criar um objeto a partir de uma string. Esses métodos são:

```js
let str = JSON.stringify(obj);
```

```js
obj = JSON.parse(str);
```

Na próxima página, veremos uma aplicação desses métodos.