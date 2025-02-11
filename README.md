- Desafío: Juego del amigo secreto.

- Objetivo general: Desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

- Objetivos específicos:
* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
* Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
* Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

- Presentación: Se entrega una carpeta, la cual contiene la imagen de la aplicación, además, del código HTML y CSS listos. El código app.js viene vacío, ya que, es lo que se debía desarrollar.
  
- Visualización aplicación:
* [Esta imagen muestra como fue entregada la aplicación] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 06 30" src="https://github.com/user-attachments/assets/e235c817-44d2-4bf1-8b19-d5f8ca61ad9b" />

- Desarrollo del desafío:
- Paso 1: Crear repositorio en GitHub.
  
- Paso 2: Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
* Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
* Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
* Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
* Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
* [Imagen del primer avance donde se puede verificar la alerta en caso de que el campo esté vacío] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 20 25" src="https://github.com/user-attachments/assets/15dd55a9-6ae1-4ac4-9e9b-6a3448e4e97b" />

- Paso 3: Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
* Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
* Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
* Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
* Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
* [imagen del segundo avance donde se puede verificar la lista de amigos visualizada en la pantalla] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 22 24" src="https://github.com/user-attachments/assets/2fd0d9ea-5e4f-4e7b-9210-d5c97932ac90" />

- Paso 4: Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
* Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
* Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
* Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
* Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() e innerHTML para mostrar el amigo sorteado.
* [Imagen donde se puede verificar la alerta que valida que haya amigos disponibles] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 41 56" src="https://github.com/user-attachments/assets/9cead23f-c5e9-44c2-a55e-23389c617351" />
* [Imagen con el último avance donde se puede verificar la lista y el nombre del amigo sorteado] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 33 21" src="https://github.com/user-attachments/assets/079d112f-2dda-4826-9e23-bf23d4fb6973" />

- Paso extra: Dentro del código HTML se incirporó un texto <p> correspondiente a una breve instrucción de cómo se deben oir ingresando los nombres. El texto dice lo siguinete: "(Ingrese los nombres uno a uno, luego haga clic en "Añadir)".
*[Imagen con el texto agregado] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 38 24" src="https://github.com/user-attachments/assets/6b73a6b5-72dd-40e9-bc36-06b938953dbe" />

- Imagen final de la aplicación con los nombres ingresados y la visualización del nombre sorteado:
* [Aplicación finalizada] <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 39 40" src="https://github.com/user-attachments/assets/1ca06aef-3a8d-439e-bb27-1b87a3b320ec" />

- Finalización: El desafío finaliza con el envío del URL de GitHub en el campo dispuesto por el curso.
