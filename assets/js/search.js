const pokemonContainer = document.getElementById("pokemon-container");
const pokemonSearch = document.getElementById("pokemon-search");
const closeModalButton = document.getElementById("close-modal-button");
const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");
const loadButton = document.getElementById("load-button");
const loadMoreButton = document.getElementById("load-more-button");
const resetButton = document.getElementById("reset-button");
let offset = 0;


async function getPokemonData(nameOrId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
    );
    const pokemon = await response.json();
    console.log("Información Enviada.");
    return pokemon;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Función para mostrar un Pokémon en un card
function displayPokemonCard(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("col-md-3", "mb-3");
  pokemonCard.innerHTML = `
    <div class="card">
      <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <button class="btn btn-primary btn-details" data-bs-toggle="modal" data-bs-target="#pokemon-search" data-name="${pokemon.name}">Ver Detalles</button>
      </div>
    </div>
  `;

  pokemonContainer.appendChild(pokemonCard);
}

// Función para mostrar los poderes de un Pokémon en un gráfico de torta (Este tenemos que arreglar)

function displayPowersChart(pokemon) {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
    <h5>Poderes:</h5>
    <canvas id="powers-chart"></canvas>
  `;

  const powers = pokemon.stats.map((stat) => stat.base_stat);
  const labels = pokemon.stats.map((stat) => stat.stat.name);

  const powersChartCanvas = document.getElementById("powers-chart");
  const powersChart = new Chart(powersChartCanvas, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: powers,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
            "#FF9F40",
          ],
        },
      ],
    },
  });
}

// Función para buscar un Pokémon por nombre
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("pokemon-name-input");
  const name = nameInput.value.toLowerCase(); //todo con minuscula

  try {
    const pokemon = await getPokemonData(name);
    console.log(pokemon.name);
    displayPokemonCard(pokemon);
    nameInput.value = ""; // Limpiar el input
  } catch (error) {
    console.log(error);
  }
});

// Función para cargar los primeros 20 pokémones
async function loadPokemons() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    );
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const pokemonData = await getPokemonData(pokemon.name);
      displayPokemonCard(pokemonData);
    });
  } catch (error) {
    console.log(error);
  }
}



// Evento al abrir el modal para mostrar los detalles del pokémon

pokemonSearch.addEventListener("show.bs.modal", async (e) => {
  const pokemonName = e.relatedTarget.dataset.name;
  const pokemon = await getPokemonData(pokemonName);
  console.log("llego hasta aqui al apretar el boton");
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  Nombre: ${pokemon.name}
  `;
  displayPowersChart(pokemon);
});

// Evento al cerrar el modal para limpiar el contenido

// Cargar los primeros 20 pokémones al cargar página
//loadPokemons();
