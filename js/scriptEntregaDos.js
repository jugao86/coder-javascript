let option = prompt(`¿Cómo quieres tu Burger hoy?
1: COMBO
2: PERSONALIZADA
`);

var combo = 180;
var descuento = 18;
var amarillo = 45;
var blanco = 40;
var cola = 45;
var manzana = 40;

switch (option) {
  case "1":
      console.log(`Pedido: ${option}, ${combo}`);
      //Queso
      let optionQueso = prompt(`¿Con que tipo de queso?
      1: Amarillo
      2: Blanco
      `);
      switch (optionQueso) {
        case "1":
            console.log(`Tipo de queso: ${optionQueso}, amarillo, incluido`);
            break;
      
            case "2":
              console.log(`Tipo de queso: ${optionQueso}, blanco, incluido`);
            break;
      
            default:
            console.log("Selecciona una opción");
            break;
        }
        //Bebida
        let optionBebida = prompt(`¿Con que bebida acompañaras?
        1: cola
        2: manzana
        `);
        switch (optionBebida) {
          case "1":
              console.log(`Tipo de bebida: ${optionBebida}, cola, incluido`);
              break;
        
              case "2":
                console.log(`Tipo de bebida: ${optionBebida}, manzana, incluido`);
              break;
        
              default:
              console.log("Selecciona una opción");
              break;
          }
      
          alert("Tu pedido estará listo en 20min. Recibiste un descuento del 10%");
          alert("Total a pagar" + " " + (combo - descuento));

      break;
//
      case "2":
        console.log(`Pedido: ${option}, precio $120`);
        //Queso
        let optionQuesoSimple = prompt(`¿Con que tipo de queso?
        1: Amarillo
        2: Blanco
        `);
        switch (optionQuesoSimple) {
          case "1":
              console.log(`Tipo de queso: ${optionQuesoSimple}, amarillo, precio ${amarillo}`);
              break;
        
              case "2":
                console.log(`Tipo de queso: ${optionQuesoSimple}, blanco, precio ${blanco}`);
              break;
        
              default:
              console.log("Selecciona una opción");
              break;
          }
          //Bebida
          let optionBebidaSimple = prompt(`¿Con que bebida acompañaras?
          1: cola
          2: manzana
          `);

          switch (optionBebidaSimple) {
            case "1":
                console.log(`Tipo de bebida: ${optionBebidaSimple}, cola, precio ${cola}`);
                break;
          
                case "2":
                  console.log(`Tipo de bebida: ${optionBebidaSimple}, manzana, precio ${manzana}`);
                break;
          
                default:
                console.log("Selecciona una opción");
                break;
            }
        
            alert("Tu pedido estará listo en 20min!");
            alert("El total de tu compra es de" + " " + (optionQuesoSimple + optionBebidaSimple));
  
      break;

      default:
      console.log("Selecciona una opción");
      break;
  }

