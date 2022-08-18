const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(item => {
  criarElemento(item);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const nome = form.nome;
  const quantidade = form.quantidade;

  const itemAtual = {
    "nome": nome.value.replace(/(\b[a-zéàá](?!\s))/g, function(x){return x.toUpperCase();}),
    "quantidade": quantidade.value
  };

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens));

  criarElemento(itemAtual);

  nome.value = '';
  quantidade.value = '';
});

function criarElemento(item) {
  const novoItem = document.createElement('li');
  const numeroItem = document.createElement('strong');

  novoItem.classList.add('item');
  numeroItem.textContent = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);  
}