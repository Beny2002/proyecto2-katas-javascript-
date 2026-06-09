// Ejercicio DOM 1

// 1.1 aqui mostramos el boton show
const button = document.querySelector(".showme");
console.log(button);

// 1.2  aqui mostramos el h1 con id #pillado
const h1 = document.querySelector("#pillado");
console.log(h1);

// 1.3 aqui todo los p 
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 1.4 Los elementos con clase .pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

// 1.5 Mostramos todos los elementos con atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// 1.6 Muestramos el 3er personaje con data-function="testMe" (índice 2)
const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);
