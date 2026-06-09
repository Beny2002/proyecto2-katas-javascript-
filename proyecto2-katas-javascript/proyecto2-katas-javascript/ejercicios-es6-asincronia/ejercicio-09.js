// Ejercicio 9 - PokeAPI - Pokémon aleatorio (generación 1: 1-151)

const randomId = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then((response) => response.json())
  .then((pokemon) => {
    const img = document.querySelector('.random-image');
    const nameEl = document.getElementById('pokemon-name');

    // Usamos el sprite oficial de alta calidad
    img.src = pokemon.sprites.other['official-artwork'].front_default;
    img.alt = pokemon.name;
    nameEl.textContent = pokemon.name;
  })
  .catch((error) => console.error('Error al cargar el Pokémon:', error));
