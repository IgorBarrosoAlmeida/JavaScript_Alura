/*-----------------------Mudando estatisticas-----------------------*/

const botoes = document.querySelectorAll('[data-ajuste]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
// Objeto que define a estatistica de cada adição de peças
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botoes.forEach( (elemento) => {
    elemento.addEventListener("click", () => {
        mudaEstatisticas(elemento.dataset.ajuste, elemento.dataset.peca, elemento.parentNode.querySelector('[data-contador]'));
        manipulaDados(elemento.dataset.ajuste, elemento.parentNode);
    });
});

function manipulaDados(operador, controle){
    const peca = controle.querySelector('[data-contador]');
    
    if(operador === "+"){
        peca.value = parseInt(peca.value) + 1;
    } else if(parseInt(peca.value) > 0){
        peca.value = parseInt(peca.value) - 1;
    }
}

function mudaEstatisticas(operador, peca, Input) {
    estatisticas.forEach( (elemento) => {
        if(operador === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } else if(parseInt(Input.value) > 0){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
    })
}

/*------------------------------------------------------------------*/

/*--------------------------Mudando imagem--------------------------*/

const cores = ["Azul", "Amarelo", "Branco", "Preto", "Rosa", "Vermelho"];
const imgRobo = document.querySelector('img[alt="Robotron"]');
let indice = 0;

imgRobo.addEventListener ("click", () => {
    if(indice === cores.length - 1){
        indice = 0;
    } else{
        indice++;
    }
    const corNova = "img/" + cores[indice] + ".png";
    imgRobo.setAttribute("src", corNova);
});
