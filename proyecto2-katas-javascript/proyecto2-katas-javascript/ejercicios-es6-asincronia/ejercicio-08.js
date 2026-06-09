// Ejercicio 8 - API Game of Thrones

const select = document.getElementById('character-list');
const img = document.querySelector('.character-image');

fetch('https://thronesapi.com/api/v2/Characters')
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      const option = document.createElement('option');
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });
  })
  .catch((error) => console.error('Error al cargar los personajes:', error));

select.addEventListener('change', (event) => {
  const imageUrl = event.target.value;
  if (imageUrl) {
    img.src = imageUrl;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
});
