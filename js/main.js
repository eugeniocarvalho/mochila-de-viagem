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
    "nome": nome.value,
    "quantidade": quantidade.value
  };

  const existe = itens.find(elemento => elemento.nome === nome.value);

  if (existe) {
    itemAtual.id = existe.id;
    atualizarElemento(itemAtual);

    itens[existe.id] = itemAtual;
  }
  else {
    itemAtual.id = itens.length;

    itens.push(itemAtual);
    
    criarElemento(itemAtual);
  }
  
  localStorage.setItem("itens", JSON.stringify(itens));

  nome.value = '';
  quantidade.value = '';
});

lista.addEventListener('click', event => {
  if (event.target.id === 'deletar') {
    deletarElemento(event.target);

  }
});

function criarElemento(item) {
  const novoItem = document.createElement('li');
  const numeroItem = document.createElement('strong');

  novoItem.classList.add('item');
  numeroItem.textContent = item.quantidade;
  numeroItem.dataset.id = item.id;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;
  novoItem.appendChild(criarBotaoDeleta());

  lista.appendChild(novoItem);  
}

function atualizarElemento(item) {
  document.querySelector(`[data-id='${item.id}']`).innerHTML = item.quantidade;
}

function criarBotaoDeleta() {
  const icone = document.createElement('img');

  icone.src = 'img/x.png';
  icone.id = 'deletar';

  return icone;
}

function deletarElemento(elemento) {
  id = elemento.parentNode.querySelector('[data-id]').dataset.id;

  elemento.parentNode.remove();

  itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

  localStorage.setItem("itens", JSON.stringify(itens));
}