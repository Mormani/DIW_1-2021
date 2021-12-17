# jQuery

jQuery é uma biblioteca JavaScript que simplifica o percurso de um documento HTML, o gerenciamento de eventos, as animações e as interações Ajax para o desenvolvimento rápido de aplicações Web.

Na verdade, ela não faz praticamente nada a mais que é possível se fazer com JavaScript, mas oferece uma forma mais simples para isso. A biblioteca é [compatível com os principais navegadores](https://jquery.com/browser-support/) e é extensível através de [*plugins*](https://www.npmjs.com/search?q=keywords:jquery-plugin) (disponíveis no npm), o que significa que pode incorporar funcionalidades novas que trariam recursos realmente novos. Finalmente, jQuery é usada em muitos outros projetos, como o Boostrap.

Mas se jQuery faz o mesmo que JavaScript, por que usá-la? Porque os seus criadores e a comunidade de usuários criaram vários componentes que resolvem os nossos problemas mais comuns, isto é, que aparecem na maioria das aplicações. Isso nos poupa de resolver esses mesmos problemas pessoalmente. 

<br/>

#### INSTALAÇÃO
jQuery pode ser usada de duas formas:

* Por meio de um arquivo jquery-X.X.X.min.js instalado localmente. Os arquivos podem ser baixados em https://jquery.com/download/
* Por meio do CDN, cujos arquivos podem ser encontrados em https://code.jquery.com/

Cada arquivo possui uma versão X.X.X específica, que segue o padrão [Versionamento Semântico](https://semver.org/lang/pt-BR/). Nos nossos projetos, usaremos sempre a versão minificada.

<br/>

#### INSERÇÃO NA PÁGINA
A jQuery pode ser encaixada na página como um *script* qualquer, mas deve vir antes de qualquer uso que seja feito dela:

```html
<!DOCTYPE html>
<html lang="pt-BR">

    <head>
        <title>Demo</title>
        <meta charset="utf-8">
        <script src="jquery-X.X.X.min.js"></script>
        <script>
            $( document ).ready(function() {
                // Seu código
            });
        </script>
    </head>

    <body>
        <p><a href="http://jquery.com/">jQuery</a></p>
    </body>

</html>
```

É claro que, nesse exemplo, o X.X.X deve ser substituído pela versão atual da jQuery.

<br/>

#### USO

Agora podemos como usar a jQuery, veja esse trecho que pode ser inserido no código acima:

```js
$( document ).ready(function() {
    $( "a" ).click(function(evt) {
        alert( "O link não funcionará mais." );
        evt.preventDefault();
    });
});
```

Aqui temos alguns elementos bem importantes:

* jQuery usa a função `$` para fazer a seleção dos elementos. É uma função equivalente ao método `querySelectorAll` e que, portanto, usa a sintaxe dos seletores CSS, mas que retorna uma coleção de objetos jQuery (e não uma coleção de objetos HTML).

* O método `ready` do objeto `document` equivale ao método `onload` do objeto `window`. Tudo que depender de todos os recursos da página serem carregados (inclusive a própria jQuery) deve ser colocado dentro desse método. Observe que esse método recebe uma função que será executada quando o documento estiver pronto.

* Cada objeto jQuery selecionado possui um conjunto de recursos vinculados a ele. Um desses recursos é o de tratamento de eventos. No exemplo, usamos o método `click` para associar uma função manipuladora ao evento `click` de um link. Funções manipuladoras de evento recebem um objeto que representa o evento e nos deixa fazer as mesmas coisas que vimos em JavaScript simples.

<br/>

#### FUNCIONALIDADES

As principais funcionalidades da jQuery estão organizadas em 8 grupos:

* **Núcleo** - Funções do núcleo da jQuery, além de alguns utilitários mais usados;
* **Seleção e percurso** - Funções para localização de conteúdo e para navegação entre eles;
* **HTML e CSS** - Funções para edição e alteração de conteúdo e de formatação;
* **Eventos** - Funções para gerenciamento de eventos de interface;
* **Efeitos** - Funções para animações básicas;
* **AJAX** - Funções para acesso assíncrono a dados e para manipulação de objetos JSON;
* **Interface** - Plugin para controles avançados de interface com o usuário;
* **Extensibilidade** - Base para a construção de plugins.

jQuery é um assunto muito extenso. Assim, neste momento, veremos apenas as suas funcionalidades mais básicas.