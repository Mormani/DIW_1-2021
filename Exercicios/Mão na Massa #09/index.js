// Imagens das cartas
let imagens = [];
for (let i = 1; i <= 8; i++) {

    imagens.push(`https://picsum.photos/id/${i}/80`);
}

let fundo = "https://picsum.photos/80?grayscale"

// Estado do jogo
let cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let cliquesTravados = false;
let temCartaVirada = false;
let posicaoCartaVirada = -1;
let valorCartaVirada = 0;
let pontos = 0;
const timerDoJogo = new Timer("#timer");

// Timer
function Timer(e) {

    this.element = e;
    this.tempo = 0;
    this.control = null;

    this.start = () => {

        this.time = 0;

        this.control =  setInterval(() => {
            
            this.time++;

            const minutes = Math.trunc(this.time / 60);
            const seconds = this.time % 60;
            document.querySelector(this.element).innerHTML = 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds;
        }, 1000);
    };

    this.stop = () => {

        clearInterval(this.control);
        this.control = null;
    };
}

// Processa clique na Imagem
const trataCliqueImagem = (e) => {

    if(cliquesTravados) return;

    const p = +e.target.getAttribute("data-valor");
    const valor = cartas[p]

    e.target.src = imagens[valor - 1];
    e.target.onclick = null;
    
    if(!temCartaVirada) {

        temCartaVirada = true;
        posicaoCartaVirada = p;
        valorCartaVirada = valor;
    } else {

        if(valor == valorCartaVirada) {

            pontos++;
        } else {

            const p0 = posicaoCartaVirada
            cliquesTravados = true;
        
            setTimeout(() => {
                    
                e.target.src = fundo;
                e.target.onclick = trataCliqueImagem;

                let img = document.querySelector(`#memoria #i${p0}`);

                img.src = fundo;
                img.onclick = trataCliqueImagem;

                cliquesTravados = false;
            }, 1500);
        }
        
        temCartaVirada = false;
        posicaoCartaVirada = -1;
        valorCartaVirada = 0;
    }
    
    if(pontos == 8) {        
    
        document.querySelector("#btnInicio").disabled = false;
        document.querySelector("#timer").style.backgroundColor = "lightgreen";

        const minVitoria = Math.trunc(timerDoJogo.time / 60);
        const secVitoria = timerDoJogo.time % 60;
        document.querySelector("#scores").innerHTML += 
        `<li>${(minVitoria < 10 ? "0" : "")}${minVitoria}:${(secVitoria < 10 ? "0" : "")}${secVitoria}</li>`;

        timerDoJogo.stop();
    }
};

// Inicia o Jogo
const iniciaJogo = () => {

    // Embaralhar as cartas
    for (let i = 0; i < cartas.length; i++) {
        
        let p = Math.trunc(Math.random() * cartas.length);
        let aux = cartas[p];

        cartas[p] = cartas[i];
        cartas[i] = aux;
    }

    // Associar evento ??s imagens
    let elemImagens = document.querySelectorAll("#memoria img");
    elemImagens.forEach(

        (img, i) => {

            img.onclick = trataCliqueImagem;
            img.style.opacity = 1;
            img.src = fundo;
        }
    );

    // Reinicia o estado do jogo
    cliquesTravados = false;
    temCartaVirada = false;
    posicaoCartaVirada = -1;
    valorCartaVirada = 0;
    pontos = 0;
    
    // Ajusta a intefarce
    document.querySelector("#btnInicio").disabled = true;
    document.querySelector("#timer").style.backgroundColor = "orange";
    timerDoJogo.start();
};

onload = () => {

    // Carrega as imagens de fundo
    let elemImagens = document.querySelectorAll("#memoria img");
    elemImagens.forEach(
    
        (img, i) => {
    
            img.src = fundo;
            img.setAttribute("data-valor", i);
            img.style.opacity = 0.4;
        }
    );

    //Cria o evento do bot??o in??cio
    document.querySelector("#btnInicio").onclick = iniciaJogo;
};