const caixa = document.querySelector('#caixa');
console.log(caixa.textContent);

caixa.classList.add('destaque');

const alerta = document.querySelector('#alerta');
console.log(alerta.textContent);

alerta.classList.add('oculto');

const card = document.querySelector('#card');
console.log(card.textContent);

console.log(card.textContent);

card.classList.add('erro');

console.log(caixa.classList.contains('destaque'));
console.log(alerta.classList.contains('oculto'));
console.log(card.classList.contains('erro'));

if(caixa.classList.contains('destaque')){   
    console.log('Funciona');
}else{
    console.log('Não funciona');
}

if(alerta.classList.contains('alerta')){
    console.log('Funciona');
}else{
    console.log('Não funciona');
}

if(card.classList.contains('card')){
    console.log('Funciona');
}else{
    console.log('Não Funciona');
}
