// Ejercicio 14

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  const count = {};
  for (let i = 0; i < list.length; i++) {
    if (count[list[i]]) {
      count[list[i]]++;
    } else {
      count[list[i]] = 1;
    }
  }
  return count;
}

const result = repeatCounter(words);
console.log(result);
