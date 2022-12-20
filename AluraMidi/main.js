function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else{
        console.log('Elemento não encontrado ou seletor invalido')

    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++) {
    let tecla = listaTeclas[i];
    let instrumento = tecla.classList[1];

    tecla.onclick = function (){
        tocaSom(`#som_${instrumento}`);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
