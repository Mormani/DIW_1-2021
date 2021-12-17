const API_KEY = "c27189cb15fa4353a5af44d60128550d";

function exibeNoticias() {

    let divTela = document.querySelector("#tela");
    let texto = "";

    // Montar texto HTML das notícias
    let dados = JSON.parse(this.responseText);

    console.log(dados);
    
    for (let i = 0; i < dados.articles.length; i++) {
        
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);
        
        texto += 
        `
        <div class="box-noticia">
            <img src="${noticia.urlToImage}" alt="">
            <span class="titulo">${noticia.title}</span><br>
            <span class="creditos">${data.toLocaleDateString()} - ${noticia.source.name} - ${noticia.author}</span><br>
            <span class="texto">${noticia.content}</span><br>
            <a href="${noticia.url}">Leia mais...</a>
        </div>`
    };

    // Preencher a div com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa() {

    let query = document.querySelector("#txtPesquisa").value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open("GET", `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();
}

document.querySelector("#btnPesquisa").addEventListener("click", executaPesquisa);