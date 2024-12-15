let livros = [];
const APIEndpoint =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosAPI();


async function getBuscarLivrosAPI() {
  const res = await fetch(APIEndpoint);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivros(livrosComDesconto);
}

