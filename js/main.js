const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const items = [];

form.addEventListener('submit', event => {
  event.preventDefault();
  const nome = form.nome;
  const quantidade = form.quantidade;

  criarElemento(nome.value, quantidade.value);

  nome.value = '';
  quantidade.value = '';
});

function criarElemento(nome, quantidade) {
  const novoItem = document.createElement('li');
  const numeroItem = document.createElement('strong');

  novoItem.classList.add('item');
  numeroItem.textContent = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
  };

  items.push(itemAtual);

  localStorage.setItem("item", JSON.stringify(items));
}