# Challenge Amigo Secreto - G8

Este proyecto es una aplicación web para organizar y sortear un **"amigo secreto"** entre un grupo de personas. La aplicación permite agregar nombres de participantes, visualizarlos en una lista y sortear aleatoriamente un nombre.

Este proyecto forma parte del **Challenge de Principiante en Programación del programa ONE - Alura**.


## Características principales
- Agregar nombres de los participantes.
- Validación de nombres para evitar entradas inválidas.
- Visualización de la lista de participantes.
- Sorteo aleatorio de un amigo secreto.
- Botón de sorteo deshabilitado tras realizar el sorteo.

## Capturas de pantalla

![](./assets/screenshots/sample.gif)

![](./assets/screenshots/desktop-initial.avif)

![](./assets/screenshots/desktop-result.avif)

## Tecnologías utilizadas

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para el diseño y estilizado de la interfaz.
- **JavaScript**: Para la lógica y funcionalidad de la aplicación.


## Uso

1. Ingresa el nombre de un amigo en el campo de texto.
2. Haz clic en el botón **"Añadir"** para agregarlo a la lista.
3. Visualiza los nombres agregados en la lista mostrada debajo del campo de entrada.
4. Una vez agregados todos los participantes, haz clic en el botón **"Sortear amigo"** para seleccionar aleatoriamente un nombre de la lista.
5. El nombre sorteado se mostrará en la parte inferior de la lista.
6. Tras realizar el sorteo, el botón de sorteo quedará deshabilitado.

## Enlace

[Live Site aquí](https://mendezpvi.github.io/g8-secret-santa-challenge/) 👈

## Conceptos aprendidos

+ `.trim()` 
  + Elimina los espacios en blanco al inicio y al final del texto.

+ `replace(/\s+/g, ' ')` 
  + Utiliza una expresion regular (/\s+/g) para encontrar uno o más espacios consecutivos (\s+).
  + `g`: es un modificar que indica que la búsqueda se aplica a todo el texto.
  + Reemplaza cualquier secuencia de espacios consecutivos con un único espacio.

+ `^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$`
  + El texto debe comenzar con una palabra formada por letras válidas (alfabeto, tildes y "ñ").
  + Puede incluir palabras adicionales, separadas por un único espacio.
  + No se permite contenido adicional, como espacios al final o caracteres no válidos.
+ `regex.test(nombreIngresado)`
  + Verifica si el texto almacenado en la variable *nombreIngresado* cumple con las reglas definidas en la expresión regular *regex*.
  + Retorna `true` si el texto es válido y `false` en caso contrario.


## Autor

✨ Frontend Mentor - [@mendezpvi](https://www.frontendmentor.io/profile/mendezpvi)

✨ X-Twitter - [@mendezpvi](https://x.com/mendezpvi)

