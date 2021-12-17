// Variáveis para armazenamos o valor, operador, estado da calculadora
let sValor = "0";
let valorAnterior = 0;
let ehNovoNumero = true;
let operacaoPendente = null;

// Tratamento no clique do botão de dígito
const digito = (n) => {

    if(ehNovoNumero) {

        sValor = "" + n;
        ehNovoNumero = false;
    } else {
        
        if(sValor.length < 10){

            sValor += n;
        } 
    }
    
    atualizaVisor();
}

// Atualização do visor
const atualizaVisor = () => {

    let [parteInteira, parteDecimal] = sValor.split(",");
    let v = "";
    c = 0;

    //console.log(parteInteira, parteDecimal);

    for(let i = parteInteira.length - 1; i >= 0; i--) {

        if(++c > 3) {
            
            v = "." + v;
            c = 1;
        }

        v = parteInteira[i] + v;
    }

    v = v + (parteDecimal ? "," + parteDecimal.substr(0, 10 - v.length) : "");

    document.querySelector("#display").innerText = v;
}

// Tratamento do clique no botão de decimal
const virgula = () => {

    if(ehNovoNumero) {

        sValor = "0,";
        ehNovoNumero = false;
    } else {

        if(sValor.indexOf(",") == -1) {

            sValor += ","
        }
    }

    atualizaVisor();
}

// Tratamento do clique no botão AC (All Clear)
const limpa = () => {

    ehNovoNumero = true;
    sValor = "0";
    valorAnterior = 0;
    operacaoPendente = null;

    atualizaVisor();
}

const calcula = () => {

    if(operacaoPendente != null) {

        let resultado;

        switch(operacaoPendente) {


            case "+": resultado = valorAnterior + valorAtual();
                      break;

            case "-": resultado = valorAnterior - valorAtual();
                      break;

            case "*": resultado = valorAnterior * valorAtual();
                      break;

            case "/": if(valorAtual() != 0) resultado = valorAnterior / valorAtual();
                      else resultado = undefined;
                      break;
        }

        if(resultado != undefined && resultado.toString().length <= 10) {
        
            sValor = resultado.toString().replace(".", ",");
        } else {
        
            if(resultado == undefined) { 

                document.querySelector("#display").innerText = "Indeterminado";
                return;
            } else {
                
                document.querySelector("#display").innerText = "ERRO";
                return;
            }
        }
    }

    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;

    atualizaVisor();
}

const valorAtual = () => parseFloat(sValor.replace(",", "."));

// Tratamento no clique nos botões de operadores
const operador = (op) => {

    calcula();
    valorAnterior = valorAtual();
    operacaoPendente = op;
    ehNovoNumero = true;
}

// Função Principal
onload = () => {

    document.querySelector("#bt-0").onclick = () => digito(0);
    document.querySelector("#bt-1").onclick = () => digito(1);
    document.querySelector("#bt-2").onclick = () => digito(2);
    document.querySelector("#bt-3").onclick = () => digito(3);
    
    document.querySelector("#bt-4").onclick = () => digito(4);
    document.querySelector("#bt-5").onclick = () => digito(5);
    document.querySelector("#bt-6").onclick = () => digito(6);
    
    document.querySelector("#bt-7").onclick = () => digito(7);
    document.querySelector("#bt-8").onclick = () => digito(8);
    document.querySelector("#bt-9").onclick = () => digito(9);
    
    document.querySelector("#bt-comma").onclick = virgula;
    document.querySelector("#bt-ac").onclick = limpa;
    document.querySelector("#bt-equals").onclick = calcula;
    
    document.querySelector("#bt-plus").onclick = () => operador("+");
    document.querySelector("#bt-minus").onclick = () => operador("-");
    document.querySelector("#bt-times").onclick = () => operador("*");
    document.querySelector("#bt-divide").onclick = () => operador("/");
}