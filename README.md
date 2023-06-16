# SPRINT 4 

# Desarrollo de Programa con JavaScript y PokeAPI

Este programa se conecta a la API de entrenamiento POKE API para obtener información de los Pokémon y mostrarla en una interfaz interactiva.

## Funcionalidades

- Visualización de Pokémon en cards de Bootstrap con atributos e imagen.
- Modal interactivo para ver detalles y poderes de cada Pokémon en un gráfico de torta.
- Búsqueda por nombre y/o ID de Pokémon.
- Carga de Pokémon en lotes de 20 con opción de cargar más y reiniciar.
- Competencia de Pokémon opcional.

## Recursos

- [Documentación PokeAPI](https://pokeapi.co/)
- [Librería Chart.js para generar gráficos](https://www.chartjs.org/docs/latest/)

## Requerimientos

1. Crear una función asíncrona para obtener los Pokémon que retorne una promesa después de 2 segundos utilizando setTimeout. El mensaje de retorno en caso de éxito debe ser: "Información Enviada".
2. Utilizar el método fetch dentro de un bloque Try/Catch, utilizando la instrucción await para recibir el valor directamente de la promesa.
3. Utilizar un método de manejo del DOM para visualizar la información obtenida.
4. Mostrar la información del Pokémon en un card de Bootstrap.
5. Generar un HTML con la función de búsqueda por nombre.
6. Generar un modal con un gráfico dinámico utilizando la librería Chart.js para mostrar los poderes del Pokémon.
7. Generar un HTML con la función de carga de Pokémon en lotes de 20.

### Requerimiento opcional

- Generar un tercer HTML que permita hacer competir a 2 Pokémon, similar al juego de piedra, papel o tijera.

### Grupo Verde

1. Cecilia Montero
2. Karla Mieres
3. Gonzalo Aranda
4. Andrea Pilquiman
5. Zimram Blanco
6. Felipe Parra