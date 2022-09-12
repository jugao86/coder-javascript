
//Variables
let nombre = prompt("Ingresa tu nombre");
let personalizada;
let combo;

let jumbo = 200;
let max = 100;
let jr = 50;
let refresco = 50;
let queso = 10;

//Funcion PERSONALIZADA
function comprapersonalizada(){
  personalizada = prompt(
    "Elige el tamaño de tu hamburguesa \n 1:Jumbo  \n 2:Max \n 3:Jr"
  );
  if (personalizada === "1"){
    alert("Wow! tu nivel de hambre es enorme");
  } else if (personalizada === "2"){
    alert("Jumbo, tu mejor elección");
  } else if (personalizada === "3"){
    alert("Lo necesario para tu pequeño")
  }

  extra = prompt(
    "Que tipo de queso te gusta? \n 1:Blanco  \n 2:Amarillo"
  );

  bebida = prompt(
    "Una bebida para acompañar \n 1:Cola  \n 2:Sprite"
  );

  if (bebida === "1"){
    alert("La chispa de la vida");
  } else if (bebida === "2"){
    alert("las cosas como son")
  }
}

//Funcion COMBO
  //object constructor
  function Combos (nombre, precio, descripcion, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.disponible = true;
  }

  
  const ComboPareja = new Combos ("Combo Pareja", (jumbo + refresco + queso) * (2), "Disfruta con tu pareja", "imagenPareja.png");
  const ComboAmigos = new Combos ("Combo Amigos", (max + refresco + queso) * (4), "Disfruta con tus amigos", "imagenAmigos.png");
  

function compracombo(){
  combo = prompt(
    "Con quien vas a compartir \n 1:pareja  \n 2:amigos"
  );

  if (combo === "1"){
    console.log(ComboPareja);
    alert("Wow! Tu combo contiene:" + " " + ComboPareja.nombre + " " + ComboPareja.descripcion + " " + ComboPareja.imagen);
  } else if (combo === "2"){
    console.log(ComboAmigos);
    alert("Tu combo contiene:" + " " + ComboAmigos.nombre + " " + ComboAmigos.descripcion + " " + ComboAmigos.imagen);
    
  } 
}

//funcion Terminar compra
function terminar(){
    if (personalizada === "1"){
      alert("Su pedido tiene un valor final de" + " " + (jumbo + refresco + queso));
    } else if (personalizada === "2"){
      alert("Su pedido tiene un valor final de" + " " + (max + refresco + queso));
    } else if (personalizada === "3"){
      alert("Su pedido tiene un valor final de" + " " + (jr + refresco + queso));
    }
    //
    if (combo === "1"){
      alert("Su Combo PEREJA tiene un valor final de" + " " + ComboPareja.precio);
    } else if (combo === "2"){
      alert("Su Combo AMIGOS tiene un valor final de" + " " + ComboAmigos.precio);
    } 
    alert("Gracias por tu compra" + " " + nombre + ".");
    //premios();
    option = "3";
}

let option = prompt(`¿Cómo quieres tu Burger hoy? \n 1: COMBO \n 2: PERSONALIZADA \n 3: Volver`);

//bucle while
while (option !== "3") {
  if (option === "1"){
    compracombo();
    terminar();
  }
  if (option === "2"){
    comprapersonalizada();
    terminar();
  }
}

//Se agrega el nombre de usuario al array de clientes
const nombres = [];
nombres.unshift(nombre);
console.log(nombres);

