const foto = document.querySelector('#foto');
const link = document.querySelector('#link');
const campo = document.querySelector('#campo');

foto.setAttribute = ('src', 'https://www.google.com/search?q=bloom+winx&rlz=1C1GCHN_enBR1212BR1218&oq=BLOOM+WI&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on#sv=CAMSaxoyKhBlLTd0ejVaNEpoQjdxVFlNMg43dHo1WjRKaEI3cVRZTToOVDB6ckNFSlhLM3JNYU0gBCoxChtfdXp3cmFzbXhPc3o5NU9VUDQ5eU04UVlfNjQSEGUtN3R6NVo0SmhCN3FUWU0YADABGAcgnMSM8AFKCBABGAEgASgB');

link.setAttribute('href', 'https://github.com');
link.textContent = 'Meu GitHub';

campo.setAttribute('disabled', '');

const srcImagem = foto.getAttribute('src');
console.log(srcImagem);