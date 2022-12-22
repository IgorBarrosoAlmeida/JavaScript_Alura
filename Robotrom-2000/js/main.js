const botoes = document.querySelectorAll('.controle-ajuste');

botoes.forEach( (elemento) => {
    elemento.addEventListener("click", () => {
        manipulaDados(elemento.textContent, elemento.parentNode);
    });
});

function manipulaDados(operador, controle){
    const elemento = controle.querySelector('.controle-contador');
    
    if(operador === "+"){
        elemento.value = parseInt(elemento.value) + 1;
    } else{
        elemento.value = parseInt(elemento.value) - 1;
    }
}