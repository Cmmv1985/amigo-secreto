// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/** Variable array que almacenará los datos de los nombres ingresados.
 */

let amigos = [];

/**
* Ingresar un nuevo amigo al array.
* Validar la entrada y verificar que el campo de entrada no esté vacío.
* Actualizar el array de amigos.
*/
function agregarAmigo() {
  let nuevoAmigo = document.getElementById("amigo").value; 
  if (nuevoAmigo.trim() !== "") {
    amigos.push(nuevoAmigo);

    // Limpiar la lista existente.
    document.getElementById("amigo").value = "";

    actualizarListaAmigos();
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

/**
* Actualizar lista de amigos y crear elementos <li> para cada amigo.
*/
function actualizarListaAmigos() {
   let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";
  
    for (let i = 0; i < amigos.length; i++) {
      let nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = amigos[i];
      listaAmigosElement.appendChild(nuevoElemento);
    }
  }

/**
* Sortear y seleccionar de manera aleatoria uno de los nombres almacenados en el array amigos.
* Validar que haya amigos disponibles previo a la realización del sorteo.
* Obtener el nombre sorteado.
* Mostrar el resultado.
*/
  function sortearAmigo() {
    let cantidadAmigos = amigos.length;

    if (cantidadAmigos === 0) {
      alert("Por favor, inserte un nombre antes de sortear");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.querySelector("#resultado");
      resultadoHTML.innerHTML = (`"El amigo sorteado es:" ${indiceAmigo}`)
    }
  }
