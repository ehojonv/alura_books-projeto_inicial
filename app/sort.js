let btnOrdenar = document.querySelector("#btnOrdenarPorPreco");   
btnOrdenar.addEventListener("click", ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
}