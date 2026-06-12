// 1. Seleciona os elementos necessários
const lista = document.querySelector('#lista');
const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');

// 2. Remove o #item-2 da lista usando .remove()
item2.remove();

// 3. Cria e insere o novo <li> antes do #item-3 usando .insertBefore
const novoItemInserido = document.createElement('li');
novoItemInserido.textContent = 'Item inserido via JS';
lista.insertBefore(novoItemInserido, item3);

// 4. Cria e substitui o #item-1 usando .replaceChild
const novoItemSubstituido = document.createElement('li');
novoItemSubstituido.textContent = 'Item substituído';
lista.replaceChild(novoItemSubstituido, item1);

// 5. Imprime o innerHTML da lista no console
console.log(lista.innerHTML);
