// Ejercicio DOM 4

// 1.1 Aplicamos el evento click en el botón con id btnToClick
const btnToClick = document.getElementById("btnToClick");
btnToClick.addEventListener("click", (event) => {
  console.log("Evento click:", event);
});

// 1.2 aqui el evento focus en el input con clase .focus
const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event) => {
  console.log("Valor del input al hacer foco:", event.target.value);
});

// 1.3 aqui el evento input en el input con clase .value
const inputValue = document.querySelector(".value");
inputValue.addEventListener("input", (event) => {
  console.log("Valor del input:", event.target.value);
});
