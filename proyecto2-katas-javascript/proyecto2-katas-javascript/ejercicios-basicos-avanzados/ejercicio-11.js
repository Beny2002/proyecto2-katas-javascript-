// Ejercicio 11

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      total += list[i];
    } else {
      total += list[i].length;
    }
  }
  return total / list.length;
}

console.log(averageWord(mixedElements));
