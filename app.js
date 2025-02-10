// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo () {
    let nuevoAmigo = document.getElementById("amigo").value;

    if (nuevoAmigo.trim() !== "") {
        amigos.push(nuevoAmigo);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}