let personagem = document.querySelector("#personagem");
let moeda = document.querySelector("#moeda");
let qtdmoedas = document.querySelector("#qtdMoedas");
let tempo = document.querySelector("#tempo");

moeda.style.display = "none";

let topo = 0;
let esquerdo = 0;

function atualizaTempo(){
    valor = parseInt(tempo.innerHTML);
    valor = valor - 1;
    if (valor <= 0) {
        valor = 0;
    }
    tempo.innerHTML = valor;
}

setInterval(atualizaTempo, 1000);

function criaMoeda(){

    let moedaX = parseInt(Math.random () * 620);
    let moedaY = parseInt(Math.random () * 428);

    moeda.style.top = moedaY + "px";
    moeda.style.left = moedaX + "px";
    moeda.style.width = 20 + "px";
    moeda.style.heigth = 20 + "px";
    moeda.style.display = "block";
}

criaMoeda();

personagem.style.top = topo + "px";
personagem.style.left = esquerdo + "px";
personagem.style.width = 36 + "px";
personagem.style.heigth = 36 + "px";

document.addEventListener("keydown", teclapressionada);
document.addEventListener("keyup", teclasolta);

function teclasolta() {
    personagem.classList.remove("andando");
}

function colisao(elem1, elem2){

    // console.log(elem1, elem2);

    let elem1X = parseInt(elem1.style.left);
    let elem1Y = parseInt(elem1.style.top);
    let elem1L = parseInt(elem1.style.width);
    let elem1A = parseInt(elem1.style.heigth);

    let elem2X = parseInt(elem2.style.left);
    let elem2Y = parseInt(elem2.style.top);
    let elem2L = parseInt(elem2.style.width);
    let elem2A = parseInt(elem2.style.heigth);

    let elem1P1 = elem1X;
    let elem1P2 = elem1X + elem1L;
    let elem1P3 = elem1Y;
    let elem1P4 = elem1Y + elem1A;

    let elem2P1 = elem2X;
    let elem2P2 = elem2X + elem2L;
    let elem2P3 = elem2Y;
    let elem2P4 = elem2Y + elem2A;


    if(
        elem1P1 < elem2P2 &&
        elem1P2 > elem2P1 &&
        elem1P3 < elem2P4 &&
        elem1P4 > elem2P3
    ) {
        moeda.style.display = "none";
        criaMoeda();

        //Recupera o valor
        let valor = parseInt(qtdmoedas.innerHTML);
        //modifiquei o valor
        valor = valor + 1;
        //mostra o valor modificado
        qtdmoedas.innerHTML = valor;
        
    }
    // console.log(elem1X, elem1Y, elem2X, elem2Y);
}

function teclapressionada(evento){
    let tecla = evento.keyCode; //recupero o cod da tecla pressionada
    personagem.classList = "";
    // console.log(tecla)
    personagem.classList.add("andando");

    colisao(personagem, moeda);

    if(tecla == 40){
        topo += 10;
        if (topo >= 412) {
            topo = 412;
        }
        personagem.style.top = topo + "px";

    }
    if(tecla == 38){
        topo -= 10;
        if (topo <= 0) {
            topo = 0;
        }
        personagem.style.top = topo + "px";
        personagem.classList.add("cima");
    }
    if(tecla == 39){
        esquerdo += 10;
        if (esquerdo >= 604) {
            esquerdo = 604;
        }
        personagem.style.left = esquerdo + "px";
        personagem.classList.add("direita");
    }
    if(tecla == 37){
        esquerdo -= 10;
        if (esquerdo <= 0) {
            esquerdo = 0;
        }
        personagem.style.left = esquerdo + "px";
        personagem.classList.add("esquerda");
    }
}