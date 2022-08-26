/*
CLASE 1
let nombre = prompt("Nombre");
let apellido = prompt("Apellido");
let edad = Number(prompt("Edad"));

let resultado = nombre + " " + apellido + " " + edad  + " " ;

alert(resultado + "Datos capturados");
*/

/* CLASE 3
EJ. 1
let food = prompt("Que se te antoja para cenar?");

switch (food) {
  case "hamburguesa":
    console.log(`Pedido: ${food}, valor $1200`);
    break;
  case "pizza":
    console.log(`Pedido: ${food}, valor $900`);
    break;
  case "lomo":
    console.log(`Pedido: ${food}, valor $800`);
    break;
  default:
    console.log("Te ahorras unos pesos si no pedis");
    break;
} 
EJ. 2
let option = prompt(`Elija una opcion:
1: Garra
2: Batman
3: SpiderHead
4: MoonFall
`);

switch (option) {
    case "1":
        console.log("Garra");
        break;
        case "2":
            console.log("Batman");
            break;
            case "3":
        console.log("SpiderHead");
        break;
      case "4":
        console.log("MoonFall");
        break;
      default:
        console.log("No has ingresado una opcion válida");
        break;
    }
*/
/*Ej. 3*/
let x = 0

while (x <= 10){
    console.log(`El valor de "X" es ${x}`)
    x++
}


/*
let entrada = prompt("Ingrese un texto o ESC para interrumpir");

let texto = " ";

while (entrada != "ESC" && entrada != "esc") {
  texto += entrada + " ";
  entrada = prompt("Ingrese un texto o ESC para interrumpir");
}

alert(texto); */