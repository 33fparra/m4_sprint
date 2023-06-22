
// const vsForm = document.getElementById("vs-form");
const vsBoton = document.getElementById("vs-button");
const resultados = document.getElementById("resultados");

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

vsBoton.addEventListener("click", async (e) => {
  e.preventDefault();

  const pokemonName1 = document.getElementById("pokemon1name");
  const pokemonName2 = document.getElementById("pokemon2name");
  const name1 = pokemonName1.value.toLowerCase();
  const name2 = pokemonName2.value.toLowerCase();

  try {

    const pokemon1 = await getPokemonData(name1);
    const pokemon2 = await getPokemonData(name2);

    function calcularPuntajeTotal(pokemon) {
      const poderes = Object.values(pokemon.stats);
      
      const puntajeTotal = poderes.reduce((total, poder) => total + poder.base_stat, 0);
      
      return puntajeTotal;
    }

    function compararPoderes(pokemon1, pokemon2) {
      const puntajePokemon1 = calcularPuntajeTotal(pokemon1);
      const puntajePokemon2 = calcularPuntajeTotal(pokemon2);
    
      let resultado = '';
    
      if (puntajePokemon1 > puntajePokemon2) {
        resultado = `¡${pokemon1.name} gana la batalla!`;
      } else if (puntajePokemon2 > puntajePokemon1) {
        resultado = `¡${pokemon2.name} gana la batalla!`;
      } else {
        resultado = '¡Es un empate!';
      }
    
      return resultado;
    }

    const ganador = compararPoderes(pokemon1, pokemon2);
    console.log(ganador);
    resultados.innerHTML = `${ganador}`;

  } catch (error) {
    console.log(error);
  }
});