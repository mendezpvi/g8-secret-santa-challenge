// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

const amigos = [];

function agregarAmigo() {
  let nombreIngresado = nombre.value.trim().replace(/\s+/g, ' ');
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;


  if (regex.test(nombreIngresado)) {
    amigos.push(nombreIngresado);
  } else {
    alert('Ingrese un nombre válido');
    limpiarInput();
    return;
  }

  actualizarListaAmigos();
  limpiarInput();
}

function actualizarListaAmigos() {
  const listaRenderizada = amigos.map(amigo => `<li>${amigo}</li>`).join("");
  listaAmigos.innerHTML = listaRenderizada;
}

function sortearAmigo() {
  let numeroAleatorio = Math.floor(Math.random() * amigos.length);

  if (amigos.length === 0) {
    alert("Aún no tenemos lista de amigos. Agregue amigos antes de sortear.");
    return;
  }

  resultado.innerHTML = `<li>El amigo secreto sorteado es ${amigos[numeroAleatorio]}</li>`;

  desactivarBoton();
}

function limpiarInput() {
  nombre.value = "";
}

function desactivarBoton() {
  const drawButton = document.querySelector(".button-draw");
  drawButton.disabled = true;
}



