// Ejercicio 40

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

console.log(findArrayIndex(mainCharacters, "Rey"));      // 4
console.log(findArrayIndex(mainCharacters, "Anakin"));   // 5
console.log(findArrayIndex(mainCharacters, "Yoda"));     // -1

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    const newArray = [...array];
    newArray.splice(index, 1);
    return newArray;
  }
  return array;
}

console.log(removeItem(mainCharacters, "Leia"));
console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Yoda")); 
