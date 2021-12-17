# Manipulação do conteúdo com jQuery

Uma das principais operações que fazemos com jQuery é a recuperação ou a alteração da página, seja do seu conteúdo, da sua formatação ou do seu comportamento.

O conteúdo é atualizado por meio dos métodos `html()` e `text()`. A diferença básica entre eles é que o método `text()` ignora as marcações. Para campos de formulário, usamos o método `val()`.

* `html()` — Recupera o conteúdo HTML de um elemento.
* `html(`*`valor`*`)` — Define o conteúdo HTML de um elemento.
* `text()` — Recupera o conteúdo textual de um elemento (ignorando as marcações, isto é, os filhos).
* `text(`*`valor`*`)` — Define o conteúdo textual de um elemento. Como ignora as marcações, qualquer tag será convertida em caracteres (ex.: '<b\>' à '\&lt; b \&gt;').
* `val()` — Retorna o valor do campo de formulário.
* `val(`*`valor`*`)` — Estabelece o valor para o campo de formulário.

Vejamos um exemplo de como isso pode ser usado. No trecho abaixo, você pode ver um parágrafo em que colocamos um número para fazer o papel de um contador. Em seguida, temos um botão ao qual queremos associar um evento que aumenta esse contador. A cada clique, o número deve aumentar.

```html
<p>Contador: <span id="contador">0</span></p>
<button id="mais1">+1</button>
```

Agora podemos criar o código jQuery para associar uma função de incremento a esse botão:

```js
$('#mais1').click( function() {
  let valor = parseInt($('#contador').text());
  $('#contador').text(valor + 1);
});
```

Além de alterarmos o conteúdo textual ou HTML dos elementos, podemos criar conteúdo adicional com a própria função `$` da jQuery:

```js
$('<p>Novo parágrafo</p>');
```

Com esse novo parágrafo, podemos fazer todas as operações necessárias e depois adicioná-lo à página por meio de algum desses métodos:

* `prepend()` — Insere conteúdo como o primeiro filho do elemento.
* `append()` — Insere conteúdo como o último filho do elemento.
* `before()` — Insere conteúdo antes do elemento (como irmão).
* `after()` — Insere conteúdo após o elemento (como irmão).
* `prependTo()` — Insere conteúdo como o primeiro filho do elemento indicado.
* `appendTo()` — Insere conteúdo como o último filho do elemento indicado.
* `insertBefore()` — Insere conteúdo antes do elemento indicado (como irmão).
* `insertAfter()` — Insere conteúdo após o elemento indicado (como irmão).

Veja esse exemplo de acréscimo do novo parágrafo a um elemento `div` específico:

```js
$('#div1').append( $('<p>Novo parágrafo</p>') );
```

Um elemento também pode ser criado por meio de um objeto de atributos, sendo que as propriedades `html` e `text` desse objeto possuem um significado especial (bastante intuitivas). Veja esse exemplo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <title>Demo</title>
        <meta charset="utf-8" />
        <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
        
        <script>
            $(document).ready(function() {
                let img = $('<img />', {
                
                src: 'https://picsum.photos/200',
                id: 'foto',
                alt: 'Foto do Picsum',
            });
            $('#p1').append(img);

            let para = $('<p></p>', {
                id: 'p2',
                html: 'segundo parágrafo',
            });
            $('#div1').append(para);
      });
    </script>
  </head>

  <body>
    <div id="div1">
      <p id="p1"></p>
    </div>
  </body>
</html>
```

Aqui, criamos dois elementos novos, uma imagem e um parágrafo, e os adicionados aos conteúdos já existentes na página.

Os atributos podem ser recuperados por meio do método `attr()`. Esse método, porém, retorna `undefined` se o atributo não existir. Assim, o método `prop()` deve ser usado para se testar propriedades como `checked`, `selected`, `disabled` e `selectedIndex`.

* `attr(atrib)` — Recupera o atributo `atrib` um elemento.
* `attr(atrib, valor)` — Define o valor de um atributo `atrib`.
* `attr(obj)` — Define os valores dos atributos por meio de um objeto.
* `prop(prop)` — Recupera a propriedade `prop` um elemento.
* `prop(prop, valor)` — Define o valor de uma propriedade `prop`.
* `prop(obj)` — Define os valores das propriedades por meio de um objeto.

Veja esse exemplo para fazermos a seleção de um determinado elemento em uma caixa de seleção:

```js
$('#caixaSelecao').prop('selectedIndex', 3);
```

Uma importante diferença entre as funções `attr()` e `prop()` é que `attr()` retorna as informações do documento HTML original, isto é, independentemente das alterações feitas pelo usuário. Obviamente, isso se aplica apenas a campos e outros elementos editáveis.

Em outras palavras, o documento *escrito* possui atributos, mas quando ele é renderizado pelo navegador, esses atributos são transformados em propriedades. Os atributos que não foram definidos explicitamente (`lang`, `title`, `alt`, `class`, ...) são criados (com valores vazios). E é possível sim alterar um atributo, considerando-se que a alteração seria feita no documento. Isso também alterará o valor da propriedade.

A jQuery também nos permite remover elementos, atributos e conteúdo de uma página HTML:

* `remove()` — Remove o elemento selecionado.
* `empty()` — Remove o conteúdo do elemento selecionado.
* `removeAttr(attr)` — Remove um atributo do elemento.
* `removeProp(prop)` — Remove uma propriedade do elemento.

Como você vê, há muitas possibilidades de alteração dos conteúdos e esses são apenas alguns dos recursos oferecidos pela jQuery.