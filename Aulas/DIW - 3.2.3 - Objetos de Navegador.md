# Objetos de Navegador

Quando o navegador abre uma página, ele cria, automaticamente, três objetos automaticamente: 

* `window` - objeto que oferece acesso às informações e recursos da janela do navegador em que a página *web* está sendo apresentada;
* `navigator` - objeto que oferece acesso às informações e recursos do próprio navegador;
* `document` - objeto que oferece acesso às informações e recursos do da própria página, incluindo seu conteúdo e formatação.

### Window
O objeto `window` é  o principal deles. Ele representa a janela do navegador e tudo que está nela, isto é, esse objeto é quem contém a sua página, incluindo o código HTML, CSS e JavaScript. Veremos, abaixo, alguns dos principais atributos e métodos desse objeto.

O objeto window nos permite obter informações sobre a janela, mas também nos deixa manipulá-la. Algumas dessas informações são:

* `window.screen` – Objeto com várias propriedades da tela
* `window.history` – Objeto com referências às últimas páginas acessadas
* `window.location` – Objetos com dados do URL da página

O objeto window possui métodos para controle de janelas e seus *frames*. Alguns deles são:

* `window.close()` – Fecha uma janela (por quem a criou)
* `window.focus()` – Atribui o foco de interação à janela atual
* `window.moveTo()` e `window.moveBy()` – Movimentam a janela
* `window.resizeTo()` e `window.resizeBy()` – Redimensionam a janela
* `window.open()` e `window.close()` – Abre e fecha janelas

O objeto window ainda possui métodos para interação com o usuário:

* `window.alert()` – Mostra uma janela modal com uma mensagem com botão OK
* `window.confirm()` – Mostra uma janela modal com botões OK e de cancelamento
* `window.prompt(`) – Mostra uma janela modal com uma pergunta para o usuário
* `window.print()` – Abre a janela de impressão do documento
* `window.setTimeout()` – Executa uma função depois de um tempo pré-definido
* `window.setInterval()` – Executa uma função repetidas vezes em intervalos de tempo pré-definidos

O objeto window é o objeto de mais alto nível. Os outros são parte dele:

```js
window.document === document
window.navigator === navigator
window.alert === alert
```

E é por isso que ele não precisa ser escrito de forma explícita o tempo todo.

Os elementos com ID no documento também são declarados no objeto window.

```html
<script>
    window.onload = () => {
        window.bt.onclick = () => alert('Olá mundo!');
    }
</script>
...
<button id="bt">Olá</button>
```

Mas não precisa ser tudo explícito. Esse trecho:

```js
window.onload = () => {
    window.bt.onclick = () => window.alert('Olá mundo!');
}
```

equivale a:

```js
onload = () => {
    bt.onclick = () => alert('Olá mundo!');
}
```

### Navigator

O objeto `navigator` nos ajuda a entender qual é o contexto de navegação do usuário. Por exemplo, podemos obter as seguintes informações:

* `navigator.userAgent` – Assinatura exclusiva do navegador
* `navigator.language` – Idioma padrão do navegador
* `navigator.geolocation` – Coordenadas geográficas do dispositivo
* `navigator.online` – Conectividade do dispositivo
* `navigator.platform` – Plataforma do usuário

### Document

O objeto `document` nos permite obter informações sobre a página que está sendo apresentada no navegador. A lista dessas informações é bem extensa. Algumas delas são:

* `document.documentURI` – URL da página
* `document.documentElement` – Referência ao elemento `<html>` da página
* `document.head` e `document.body` – Referências ao cabeçalho e corpo da página
* `document.links` e `document.images` – Listas de links e de imagens da página

É possível se obter uma referência para um elemento qualquer da página, por meio do seu ID:

```html
<script>
    window.onload = () => {
        let botao = document.getElementById('bt');
        ...
    }
</script>
...
<button id="bt">Olá</button>
```

A partir do acesso ao elemento, podemos fazer qualquer alteração na sua estrutura, conteúdo, formatação ou comportamento.

```html
<script>
    window.onload = () => {
        let botao = document.getElementById("bt");
        botao.innerHTML = "<strong>Olá mundo!</strong>";
        botao.style.backgroundColor = "#D0D0D0";
        botao.onclick = () => alert("Olá mundo!");
    }
</script>
...
<button id="bt">Olá</button>
```

O conjunto de métodos e propriedades do objeto document é chamado de: **DOCUMENT OBJECT MODEL (DOM)**