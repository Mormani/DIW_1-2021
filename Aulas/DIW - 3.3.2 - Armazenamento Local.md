# Armazenamento Local

Os navegadores nos oferecem uma forma de armazenamento local para registrarmos quaisquer informações necessárias. Exemplos dessas informação são o ID do usuário, a última página que visitou (para continuar a navegação) ou quaisquer outros dados da sua experiência. Isso é feito por meio de uma API chamada WebStorage.

Esses dados ficarão armazenados no navegador do usuário. Isso significa que ninguém, nem mesmo o servidor, tem acesso a eles. Além disso, como é o próprio navegador que os gerencia, esses dados não estarão disponíveis para outros navegadores. Por exemplo, se eles foram criados a partir de uma visita ao site com o Chrome, então nem o Firefox, nem o Edge, nem nenhum outro navegadores conseguirão acessá-los.

A API Web Storage oferece dois objetos usados para o armazenamento de dados no navegador, na forma de pares nome-valor, e é esperado que o navegador garanta pelo menos 5 MB de espaço para armazenamento por site. Os objetos são:

* `sessionStorage` — usado para o armazenamento temporário de dados. Esses dados ficam disponíveis apenas para as páginas abertas na janela que os criou. Ao término da sessão, os dados são apagados.
* `localStorage` — oferece um armazenamento permanente de dados e que podem ser acessados a partir de qualquer janela.

Os dois objetos possuem o seguinte conjunto de métodos:

* `setItem`(*chave*, *valor*) — armazena uma chave, com o respectivo valor;
* `getItem`(*chave*) — recupera o valor de uma chave;
* `removeItem`(*chave*) — apaga uma chave do armazenamento (e seu valor);
* `length` — informa a quantidade de chaves armazenadas para este site;
* `key`(*n*) — retorna o nome da n-ésima chave;
* `clear`( ) — apaga todas as chaves e valores deste site.

Um exemplo de uso desse armazenamento é o do evento de formulário do *login*. Veja o uso:

```html
<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <title>Login</title>
        <meta charset="utf-8"/>
        <script>
            window.onload = () => {
            
            // carrega o ultimo identificador de usuário usado
            nome.value = localStorage.getItem('username');

            // loga o usuário e registra o seu identificador
            login.onsubmit = (evento) => {

                localStorage.setItem('username', nome.value);
                alert(`Usuário ${nome.value} logado.`);
                evento.preventDefault();
            };
        };
        </script>
    </head>

    <body>
        <form id="login" method="post" action="https://postman-echo.com/post">
            <p>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" autocomplete="off" />
            </p>
            <p>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" />
            </p>
            <p><button type="submit">Confirmar</button></p>
        </form>
    </body>

</html>
```

Aqui estamos recuperando o valor da chave `username` que estiver armazenado e atribuindo esse valor como valor inicial do campo nome por meio do seu atributo `value`. Em seguida, no tratamento do evento `submit`, atualizamos o valor pelo nome usado ao logar.

Todos os valores devem ser armazenados na forma de *strings*, inclusive os números. Assim, precisamos converter tudo para *strings* . Isso, porém, é feito automaticamente por meio da coerção de tipos, exceto quando estamos querendo armazenar objetos complexos. Nesses casos, podemos usar os métodos `JSON.stringify` e `JSON.parse` para converter objetos para *strings* e, mais tarde, transformar essas *strings* de volta em objetos.