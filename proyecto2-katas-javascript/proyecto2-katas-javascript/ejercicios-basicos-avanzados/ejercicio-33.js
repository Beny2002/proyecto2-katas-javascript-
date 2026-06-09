// Ejercicio 33

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return "País no encontrado en la lista.";
  }
}

console.log(getCapital("Spain"));    // Madrid
console.log(getCapital("France"));   // Paris
console.log(getCapital("Japan"));    // País no encontrado en la lista.
