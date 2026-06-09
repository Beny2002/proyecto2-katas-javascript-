// Ejercicio 42

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indexA, indexB) {
  const newArray = [...array];
  const temp = newArray[indexA];
  newArray[indexA] = newArray[indexB];
  newArray[indexB] = temp;
  return newArray;
}

console.log(swap(fantasticFour, 0, 3));
console.log(swap(fantasticFour, 1, 2));