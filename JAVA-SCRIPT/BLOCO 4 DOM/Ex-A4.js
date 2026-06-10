const nome = document.querySelector('#nome');
console.log(nome.textContent); 
console.log(nome.value)

const idadeTexto = document.querySelector('#idade');
console.log(idadeTexto.textContent);
console.log(idadeTexto.value);

const curso = document.querySelector('#curso');
console.log(nome.textContent);
console.log(curso.value);

const idade = Number(idade.textContent);

console.log(´Nome: ${nome.value} | Idade: ${idade.value} | Curso:${curso.value}´);
;