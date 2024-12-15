const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const tag = elementoBtn.value;
    let livrosFiltrados = tag == "disponivel"? filtrarPorDisponibilidade() : filtrarPorCategoria(tag);
    exibirLivros(livrosFiltrados);

    if (tag == "disponivel") {
        const valorTotal = calcularValorTotalLivros(livrosFiltrados);
        exibirValorTotalLivrosDaTela(valorTotal);
    }
}

function filtrarPorCategoria(tag) {
    return livros.filter(livro => livro.categoria == tag);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDaTela(valorTotal) {

    sectionValorTotalLivros.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>`
}