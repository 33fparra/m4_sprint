//Nos distribuimos el trabajo por ahora


// Para poder trabajar el proyecto pueden usar los siguientes recursos:
// Documentación PokeAPI
// ● https://pokeapi.co/
// Librería para generar gráficos
// ● https://www.chartjs.org/docs/latest/


//1. Crear una función asíncrona para obtener los pokemones que retorne una promesa
//después de un (2) segundo utilizando setTimeout. El mensaje a retornar debe en
//caso de try debe ser un mensaje que indique: “Información Enviada”.  (pipe)

async function obtenerPokemones() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Información Enviada");
      }, 2000);
    });
  }


//2. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción
//await para recibir el valor directamente de la promesa. (pipe)
try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await response.json();
    // Aquí puedes manipular los datos obtenidos de la API
  } catch (error) {
    console.log(error);
  }

//3. Utilizar un método de manejo del DOM para visualizar la información  *(pipe)

const pokemonCard = document.createElement("div");
pokemonCard.classList.add("card");
// aquí pueden agregar los atributos, imagen y demás detalles del Pokemon al card
document.body.appendChild(pokemonCard);


//4. Mostrar la información del Pokémon en un card, Se puede crear una función que tome los datos del Pokemon 
//y genere un card de Bootstrap con la información correspondiente. Luego, llamar a esta función dentro del punto 3 para visualizar cada Pokemon en un card.(Ceci)



//5. Generar un HTML con la función de búsqueda por nombre:
// Aqui chiquillos hay que crear un archivo HTML que contenga un formulario con un campo de búsqueda por nombre y/o ID. Implementa un evento en el formulario para capturar el valor 
// ingresado y realizar una búsqueda en la API de PokeAPI. Luego, utiliza el método de manejo del DOM para mostrar los resultados de la búsqueda en cards de Bootstrap. *(Karla Andrea)



//6. Generar un modal con un gráfico dinámico para los poderes del Pokémon:
// Aqui podemos crear un modal utilizando las funcionalidades de Bootstrap. Agregar un evento en los cards de los Pokemon para que, al hacer clic, se abra el modal. 
// Dentro del modal, utiliza una biblioteca de gráficos, como Chart.js, para generar un gráfico de torta que represente los poderes del Pokemon seleccionado. *(Zimram Gonza)



//7. Generar un HTML con la función de cargar:
// Crea un archivo HTML que contenga un botón de carga. Implementa un evento en el botón de carga que llame a una función para obtener los primeros 20 Pokemon de la API. Utiliza el método de
//  manejo del DOM para mostrar los Pokemon en cards de Bootstrap. Crea un segundo botón de "Cargar Más" que, al hacer clic, obtenga los siguientes 20 Pokemon y los muestre en la página. 
//  Implementa un tercer botón llamado "Borrar todo" que reinicie la secuencia y muestre nuevamente los 20 primeros Pokemon. 



//-------------------------------------OPCIONAL LUNES-------------------------------------------------------------



//8. Generar un tercer HTML que permita hacer competir a 2 pokemones, similar al ejercicio de piedra, papel o tijera *(Todos)