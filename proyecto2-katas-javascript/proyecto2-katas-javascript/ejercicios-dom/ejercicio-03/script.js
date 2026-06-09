// Ejercicio DOM 3

// 1.1 Creamos una lista ul > li con los países
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ulCountries = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

// 1.2 Eliminamos el elemento con clase .fn-remove-me
const toRemove = document.querySelector(".fn-remove-me");
toRemove.remove();

// 1.3 Creamos  (ul > li) de coches dentro del div con data-function="printHere"
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");
for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ulCars.appendChild(li);
}
printHereDiv.appendChild(ulCars);

// 1.4 Creamosw los  divs con h4 e img para cada country del array
const countriesData = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const container = document.createElement("div");
container.id = "cards-container";

for (const item of countriesData) {
  const card = document.createElement("div");
  card.className = "card";

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = item.title;

  card.appendChild(h4);
  card.appendChild(img);
  container.appendChild(card);
}
document.body.appendChild(container);

// 1.5 aqui insertamos el botón que elimina el último div del contenedor
const btnRemoveLast = document.createElement("button");
btnRemoveLast.textContent = "Eliminar último";
btnRemoveLast.addEventListener("click", () => {
  const cards = container.querySelectorAll(".card");
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
document.body.appendChild(btnRemoveLast);

// 1.6 aqui el botón individual en cada card para eliminarla
const allCards = container.querySelectorAll(".card");
allCards.forEach((card) => {
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Eliminar";
  btnDelete.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(btnDelete);
});
