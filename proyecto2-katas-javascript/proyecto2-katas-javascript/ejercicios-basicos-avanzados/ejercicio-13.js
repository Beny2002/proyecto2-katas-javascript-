// Ejercicio 13

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, value) {
  const index = nameList.indexOf(value);
  if (index !== -1) {
    console.log(true, "Posición:", index);
    return { found: true, position: index };
  } else {
    console.log(false);
    return { found: false };
  }
}

nameFinder(names, "Tony");    // true, posición 2
nameFinder(names, "Bruce");   // true, posición 7
nameFinder(names, "Batman");  // false
