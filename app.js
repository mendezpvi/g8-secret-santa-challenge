// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

const amigos = [];

function agregarAmigo() {
  let nombreIngresado = nombre.value.trim().replace(/\s+/g, ' ');
  const regex = /^[A-Za-zÁÉÍÓÚáéíóú]+( [A-Za-zÁÉÍÓÚáéíóú]+)*$/;
  if (regex.test(nombreIngresado)) {
    amigos.push(nombreIngresado)
  } else {
    alert('Ingrese un nombre válido');
  }
  renderAmigos()
  cleanInput()
}

function renderAmigos() {
  const result = amigos.map(amigo => `<li>${amigo}</li>`).join("");
  // let result = "";
  // for(let i=0; i < amigos.length; i++) {
  //   result += `<li>${amigos[i]}</li>`
  // }
  listaAmigos.innerHTML = result
}

function sortearAmigo() {
  let numeroAleatorio = Math.floor(Math.random() * amigos.length);
  resultado.innerHTML = `<li>El amigo secreto sorteado es ${amigos[numeroAleatorio]}</li>`
  console.log(numeroAleatorio)
}

function cleanInput() {
  nombre.value = "";
}




