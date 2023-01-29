const form = document.querySelector("#adicionar");
const lista = document.querySelector("#lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

// Exibição inicial de todos os itens já cadastrados
itens.forEach( (elemento) => {
    exibeItemLista(elemento);
});

// Função que exibe um item passado como parametro
function exibeItemLista(item) {
    // Cria item item da lista (<li></li>)
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    // Cria elemento strong que contem a quantidade (<strong>quantidade</strong>)
    const quantidadeItem = document.createElement("strong");
    quantidadeItem.innerHTML = item.quantidade;

    // Adiciona quantidade (como elemento filho) e o nome ao novo item
    novoItem.appendChild(quantidadeItem);

    // Adiciona item na lista
    novoItem.innerHTML += item.nome;
    lista.appendChild(novoItem);
}

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
    itens.push(itemAtual);

    exibeItemLista(itemAtual);

    // Adiciona a lista transformada em string ao localStorage
    localStorage.setItem("itens", JSON.stringify(itens));

    // Limpa form
    nome.value = ""
    quantidade.value = ""
})