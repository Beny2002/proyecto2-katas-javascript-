// Ejercicio DOM 2

// 2.1 Insertamos dinámicamente el div vacio 
const div1 = document.createElement("div");
document.body.appendChild(div1);

// 2.2 Insertamos dinámicamente un div que tenga un p
const div2 = document.createElement("div");
const p2 = document.createElement("p");
p2.textContent = "Soy un párrafo dentro de un div";
div2.appendChild(p2);
document.body.appendChild(div2);

// 2.3  Aqui insertamos dinámicamente un div con 6 p usando un loop
const div3 = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = "Párrafo número " + i;
  div3.appendChild(p);
}
document.body.appendChild(div3);

// 2.4 Insertamos dinámicamente una p con el texto indicado en el ejercicio  'Soy dinámico!'
const pDynamic = document.createElement("p");
pDynamic.textContent = "Soy dinámico!";
document.body.appendChild(pDynamic);

// 2.5 Insertamos en el h2 con la clase .fn-insert-here el texto indicado  'Wubba Lubba dub dub'
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Creamos una lista ul > li con los textos del array
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Eliminamos  todos los nodos con clase  -> .fn-remove-me
const toRemove = document.querySelectorAll(".fn-remove-me");
toRemove.forEach((el) => el.remove());

// 2.8 Insertamos una p con el texto 'Voy en medio!' entre los dos div sin clase
const allDivs = document.querySelectorAll("div:not([class])");
const pMiddle = document.createElement("p");
pMiddle.textContent = "Voy en medio!";
allDivs[0].insertAdjacentElement("afterend", pMiddle);

// 2.9 Insertamos p con 'Voy dentro!' dentro de todos los div con clase .fn-insert-here
const insertHereDivs = document.querySelectorAll("div.fn-insert-here");
insertHereDivs.forEach((div) => {
  const pInside = document.createElement("p");
  pInside.textContent = "Voy dentro!";
  div.appendChild(pInside);
});
