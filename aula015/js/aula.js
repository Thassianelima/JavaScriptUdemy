let numero = prompt('Digite um numero');
numero = Number(numero);

const numeroTitulo = document.getElementById('numero-Titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero - 2 é ${numero + 2}</p>`