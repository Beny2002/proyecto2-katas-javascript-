// Ejercicio 4

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log(aldeanos[3]);

aldeanos.push("Cervasio");
console.log(aldeanos);

aldeanos[0] = "Bambina";
console.log(aldeanos);

aldeanos.reverse();
console.log(aldeanos);

const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos.splice(indexNarciso, 1, "Canela");
}
console.log(aldeanos);
console.log(aldeanos[aldeanos.length - 1]);
