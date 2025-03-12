**<ins>Desafío: Juego del amigo secreto.</ins>**

**<ins>Objetivo general:</ins>** Desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

**<ins>Objetivos específicos:</ins>**
* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
* Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
* Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

**<ins>Presentación:</ins>** Se entrega una carpeta, la cual contiene la imagen de la aplicación, además, del código HTML y CSS listos. El código app.js viene vacío, ya que, es lo que se debía desarrollar.
  
**<ins>Visualización aplicación:</ins>**
> Esta imagen muestra como fue entregada la aplicación <img width="1414" alt="Captura de pantalla 2025-03-12 a la(s) 14 43 08" src="https://github.com/user-attachments/assets/674034c3-fe48-40f0-ac77-e5d906db41e1" />

**<ins>Desarrollo del desafío:</ins>**
  
**<ins>Paso 1:</ins> Crear repositorio en GitHub.</ins>**
  
**<ins>Paso 2:</ins>** Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
* Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
* Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
* Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
* Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
  
> Imagen del primer avance donde se puede verificar la alerta en caso de que el campo esté vacío <img width="1413" alt="Captura de pantalla 2025-03-12 a la(s) 14 46 09" src="https://github.com/user-attachments/assets/295f58ef-a3f3-4ecb-9872-afd82493b761" />

**<ins>Paso 3:</ins>** Crea una función que recorra el array amigos y agregue cada nombre como un elemento (li) dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
* Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
* Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
* Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (li) para cada título.
* Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

> Imagen del segundo avance donde se puede verificar la lista de amigos visualizada en la pantalla <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 22 24" src="https://github.com/user-attachments/assets/2fd0d9ea-5e4f-4e7b-9210-d5c97932ac90" />

**<ins>Paso 4:</ins>** Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
* Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
* Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
* Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
* Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById() e innerHTML para mostrar el amigo sorteado.
  
> Imagen donde se puede verificar la alerta que valida que haya amigos disponibles <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 41 56" src="https://github.com/user-attachments/assets/9cead23f-c5e9-44c2-a55e-23389c617351" />
> Imagen con el último avance donde se puede verificar la lista y el nombre del amigo sorteado <img width="1418" alt="Captura de pantalla 2025-03-12 a la(s) 12 47 18" src="https://github.com/user-attachments/assets/9b3d87f1-ef80-43e1-bfe5-461ae5011388" />

**<ins>Paso extra 1:</ins>** Dentro del código HTML se incoporó un texto <p> correspondiente a una breve instrucción de cómo se deben ir ingresando los nombres de los amigos. El texto dice lo siguiente: (Ingrese los nombres uno a uno, luego haga clic en "Añadir"). Además, se creó el código en CSS para dar fuente y tamaño a la letra.

> Imagen con el texto agregado <img width="1416" alt="Captura de pantalla 2025-03-12 a la(s) 12 51 33" src="https://github.com/user-attachments/assets/d36d18b0-9037-44c3-b8ce-f1f263304717" />

**<ins>Paso extra 2:</ins>** Dentro del código HTML se incorporó un nuevo botón el cual reiniciará el juego una vez realizado el sorteo. la función se programó en JavaScript. El código HTML y el CSS, fue clonado del botón de sorteo para que ambos quedaran iguales. También se incorporó una alerta que indica "Sorteo reiniciado. Puede agregar nuevos amigos".

> Imagen con el nuevo botón y la alerta al presionar el boton de reiniciar sorteo <img width="1415" alt="Captura de pantalla 2025-03-12 a la(s) 14 40 20" src="https://github.com/user-attachments/assets/a44282fe-8702-4bb1-8d95-299edc505f5c" />

**<ins>Imagen final de la aplicación con los nombres ingresados y la visualización del nombre sorteado:</ins>**

> Aplicación finalizada <img width="1416" alt="Captura de pantalla 2025-03-12 a la(s) 14 42 12" src="https://github.com/user-attachments/assets/7e762a40-2641-4af8-ba74-f4b685ddaaca" />


**<ins>Finalización: El desafío finaliza con el envío del URL de GitHub en el campo dispuesto por el curso.</ins>**

> Imagen del campo donde se debe ingresar el enlace del proyecto o desafío <img width="1440" alt="Captura de pantalla 2025-02-11 a la(s) 18 54 16" src="https://github.com/user-attachments/assets/075fa694-6264-4849-bc6f-533b544641bd" />

