# Tratamento de eventos com jQuery

O tratamento de eventos em jQuery também segue a mesma lógica do tratamento de eventos em JavaScript, mas há uma série de funções que facilitam esse trabalho.

O evento mais simples é o clique do mouse que pode ser capturado pela função `click()`.

```js
$(document).ready(function(){
  $('button').click(function(){
    alert('Olá mundo!');
  });
});
```

A função especificada como parâmetro do método `click()` determina o comportamento que deve ser executado quando esse evento for disparado.

O clique de um mouse é um dos eventos mais comuns em uma página web. Assim, há um método especial para tratá-lo: `click()`. Outros eventos que possuem métodos dedicados são listados a seguir. 

<br/>

#### EVENTOS DE MOUSE

* `click()` — Clique do mouse sobre o elemento.
* `dblclick()` — Duplo clique do mouse sobre o elemento.
* `mousedown()` — Botão do mouse é pressionado sobre o elemento.
* `mouseup()` — Botão do mouse é solto sobre o elemento.
* `mouseover()` — Cursor do mouse entra na área do elemento, excluindo a área dos descendentes.
* `mouseenter()` — Cursor do mouse entra na área do elemento, incluindo a área dos descendentes.
* `mouseout()` — Cursor do mouse sai da área do elemento, inclusive quando indo para a área dos descendentes.
* `mouseleave()` — Cursor do mouse sai da área do elemento, independentemente da área dos descendentes.
* `mousemove()` — Cursor do mouse se move sobre o elemento.
* `hover(fn1,fn2)` — Combinação dos eventos `mouseenter` e `mouseleave`.
* `contextmenu()` — Clique com o botão direito do mouse.

<br/>

#### EVENTOS DE TECLADO

* `keypress()` — Tecla do teclado foi pressionada e solta com o elemento em foco.
* `keydown()` — Tecla do teclado foi pressionada com o elemento em foco. Inclui teclas como Shift, Esc e Control.
* `keyup()` — Tecla do teclado foi solta com o elemento em foco.

<br/>

#### EVENTOS DE FORMULÁRIO

* `focus()` — O campo do formulário (ou link) recebeu o foco.
* `blur()` — O campo do formulário (ou link) perdeu o foco.
* `focusin()` — O elemento ou algum descendente dele recebeu o foco.
* `focusout()` — O elemento ou algum descendente dele perdeu o foco.
* `change()` — O valor do campo `input`, `textarea` ou `select` foi alterado.
* `select()` — O usuário fez alguma seleção de texto em um campo `input` do tipo texto ou em um campo `textarea`.
* `submit()` — O usuário tentou enviar o formulário.

<br/>

#### EVENTOS DE JANELA

* `resize()` — A janela do navegador foi redimensionada.
* `scroll()` — A janela do navegador ou algum elemento com a propriedade `overflow` definida para `scroll`, foi rolado.

<br/>

#### EVENTOS DE DOCUMENTO

* `load()` — O documento HTML (ou outro recurso específico) foi carregado.
* `ready()` — Toda a página foi carregada (HTML e recursos).
* `unload()` — O usuário saiu da página (navegando outra página ou, em alguns navegadores, fechando a janela).

Além dessa lista de eventos, podemos criar associar ou remover manipuladores de eventos aos elementos por meio dos métodos `on()`, `off()` e  `one()`. Esses métodos nos permite, inclusive, criar eventos personalizados. E o método `trigger()` permite disparar manualmente um evento. Todos esses assuntos, porém, são mais avançados. Deixarei apenas a documentação como referência, para que você possa consultá-la quando estiver mais experiente com jQuery: https://api.jquery.com/category/events/

Antes de concluirmos a visão sobre eventos, porém, vale a pena saber que todas as funções manipuladoras de eventos também recebem um objeto jQuery.event que um extenso conjunto de métodos e propriedades, em grande parte herdados da JavaScript. Veja como ele pode ser usado:

```js
$('button').click(function(evento){
  console.log(evento.target);
});
```

Os principais métodos e propriedades desse objeto são:

* `type`  — Tipo de evento.
* `target`  — Elemento registrado para o evento ou um descendente dele.
* `data`  — Objeto opcional de dados passado pelo método do evento (ex:` on()`).
* `preventDefault()`  — Impede que o comportamento padrão seja executado.
* `stopPropagation()`  — Evita que os elementos ancestrais executem o evento.