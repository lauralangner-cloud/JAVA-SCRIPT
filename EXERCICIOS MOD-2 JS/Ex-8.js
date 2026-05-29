const frutas = ["Maçã", "Banana", "Laranja"];

// 1. adiciona no final
frutas.push("Uva");
console.log(frutas);

// 2. adiciona no início
frutas.unshift("Morango");
console.log(frutas);

// 3. remove o último
frutas.pop();
console.log(frutas);

// 4. remove o primeiro
frutas.shift();
console.log(frutas);

// 5. tamanho final
console.log(frutas.length);