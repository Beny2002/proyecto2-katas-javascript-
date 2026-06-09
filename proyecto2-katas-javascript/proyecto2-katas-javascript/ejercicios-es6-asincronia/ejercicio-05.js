// Ejercicio 5 - Filter con input

const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener('input', (event) => {
  const searchValue = event.target.value;

  const filtered = streamers.filter((streamer) =>
    streamer.name.includes(searchValue)
  );

  console.log(filtered);
});
