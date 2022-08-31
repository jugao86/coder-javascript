//Entrega uno

var nombre = prompt("Ingresa tu nombre");
var edad = Number(prompt("Ahora tu edad"));

let resultado = "Hola" + " " + nombre + " " + "Tienes hasta" + " " + edad + " " + "para esconderte";

alert(resultado);

let x = 0;

do {
  console.log(`${x}`);
  x++;
} while (x <= edad);

alert("¡Un" + " " + "Dos" + " "  + "Tres!" + " " + "por" + " " + nombre + " " + "que esta detras del monitor");