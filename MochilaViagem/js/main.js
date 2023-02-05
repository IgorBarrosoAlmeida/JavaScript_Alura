const form = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

// Exibição inicial de todos os itens já cadastrados
itens.forEach( (elemento) => {
    exibeItemLista(elemento);
});

// Adiciona novo item a lista ao clicar em submit
form.addEventListener("submit", (evento) => {
    // Tira o comportamento padrão do evento de submit
    evento.preventDefault();

    // Pega os values do formulario a partir do identificador
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];
    
    // Cria objeto e o adiciona a lista
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    // Trata de casos onde o item já está na lista
    const existe = itens.find(elemento => elemento.nome === nome.value);

    if(existe) {
        // O id do novo item é igual ao que já existia
        itemAtual.id = existe.id;

        atualizaItem(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    } else{
        // Id do novo item é igual ao tamanho do vetor de itens
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1].id) + 1 : 0;

        // O item é colocado na lista de itens
        itens.push(itemAtual);

        // Exibe no documento html
        exibeItemLista(itemAtual);
    }

    // Adiciona a lista transformada em string ao localStorage
    localStorage.setItem("itens", JSON.stringify(itens));

    // Limpa form
    nome.value = "";
    quantidade.value = "";
})


// Função que exibe um item passado como parametro
function exibeItemLista(item) {
    // Cria item item da lista (<li></li>)
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    // Cria elemento strong que contem a quantidade (<strong>quantidade</strong>)
    const quantidadeItem = document.createElement("strong");
    quantidadeItem.innerHTML = item.quantidade;
    // Seta um id na tag strong
    quantidadeItem.dataset.id = item.id;

    // Adiciona quantidade e o butão de delete (como elementos filhos), e o nome ao novo item
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;
    novoItem.appendChild(createDelButton(item.id));

    // Adiciona item na lista
    lista.appendChild(novoItem);
}

function atualizaItem(item) {
    const quantidadeAntiga = document.querySelector("[data-id='"+item.id+"']");

    quantidadeAntiga.innerHTML = item.quantidade;
}

function createDelButton(id) {
    const elementoButton = document.createElement("button");
    elementoButton.innerHTML = "X";
    elementoButton.classList.add("delButton");

    elementoButton.addEventListener("click", function() {
        deletaElemento(this.parentNode, id);
    })

    return elementoButton;
}

function deletaElemento(elemento, id) {
    elemento.remove();

    // Procura elemento com id passado e tira ele da lista
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    // Atualiza localStorage
    localStorage.setItem("itens", JSON.stringify(itens));
}