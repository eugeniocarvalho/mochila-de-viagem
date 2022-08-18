const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', event => {
  event.preventDefault();
  criarElemento(form.nome.value, form.quantidade.value);
});

function criarElemento(nome, quantidade) {
  const novoItem = document.createElement('li');
  const numeroItem = document.createElement('strong');

  novoItem.classList.add('item');
  numeroItem.textContent = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}