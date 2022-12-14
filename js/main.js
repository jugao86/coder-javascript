//
const claseCombo = document.querySelector(".ProductoUno").textContent="Hamburguesa en combo";
const clasePerson = document.querySelector(".ProductoDos").textContent="Hamburguesa personalizada";

class Cliente{
  constructor(nombre){
    this.nombre = nombre;
  }
}


let boton = document.getElementById("btnGuardar");
boton.addEventListener("click", cargarCliente);

function cargarCliente(){
  let nombre = document.getElementById("nombre").value;
  let cliente1 = new Cliente(nombre);
  console.log(cliente1);
  mostrarCliente(cliente1);
}



//
let listaVacia = document.querySelector("#listCarrito");

let productos = [
  {id: 1, titulo: "Hamburguesa en combos", descripcion: "lorem ipsum 1", btn: "btnCompraCombo"},
  {id: 2, titulo: "Hamburguesa personal", descripcion: "lorem ipsum 2", btn: "btnComprapersonalizada"},
]

for (producto of productos){
  let contListProductos = document.createElement("div")
  contListProductos.innerHTML= `
                    
                    <div class="bg-light border border-danger rounded overflow-hidden shadow m-2 d-flex text-secondary">
                        <img src="./" alt="imagen" class="bg-secondary img-fluid" style="min-width:200px">
                        <div class="p-2 border border-warning col">
                            <h3 class="ProductoUno text-primary">${producto.titulo}</h3>
                            <p>
                            ${producto.descripcion}
                            </p>
                            <div class="d-flex justify-content-end">
                                <div class="p-2">
                                    <button id="${producto.btn}">Añadir a carrito</button>
                                </div>
                              </div>
                              
                            </div>
                    </div>
  `;
  listaVacia.appendChild(contListProductos)
}


//Funcion PERSONALIZADA
document.getElementById("btnComprapersonalizada").addEventListener("click", comprapersonalizada);


document.getElementById("btnCompraCombo").addEventListener("click", compraCombo);

//Variables
//let nombre = prompt("Ingresa tu nombre");
let personalizada;
let combo;
let jumbo = 200;
let max = 100;
let jr = 50;
let refresco = 50;
let queso = 10;


  function comprapersonalizada() {
    personalizada = prompt(
      "Elige el tamaño de tu hamburguesa \n 1:Jumbo  \n 2:Max \n 3:Jr"
    );
    if (personalizada === "1"){
      alert("Wow! tu nivel de hambre es enorme");
    } else if (personalizada === "2"){
      alert("Max, tu mejor elección");
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
  

  function compraCombo() {
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
      const carrito = [
        {nombre: "refresco", precio:50 },
        {nombre: "queso", precio:10 },
        {nombre: "jumbo", precio:200 },
      ];
      let resultado = carrito.reduce((accum, producto) => {
        return accum + producto.precio;
      }, 0);

      alert("Su pedido tiene un valor final de" + " " + resultado);

    } else if (personalizada === "2"){
      const carrito = [
        {nombre: "refresco", precio:50 },
        {nombre: "queso", precio:10 },
        {nombre: "max", precio:100 },
      ];
      let resultado = carrito.reduce((accum, producto) => {
        return accum + producto.precio;
      }, 0);

      alert("Su pedido tiene un valor final de" + " " + resultado);
    } else if (personalizada === "3"){
      
      const carrito = [
        {nombre: "refresco", precio:50 },
        {nombre: "queso", precio:10 },
        {nombre: "jr", precio:50 },
      ];

      let resultado = carrito.filter((producto) => 
      producto.precio === jr);

      console.log(resultado);
    }
    //
    if (combo === "1"){
      alert("Su Combo PEREJA tiene un valor final de" + " " + ComboPareja.precio);
    } else if (combo === "2"){
      alert("Su Combo AMIGOS tiene un valor final de" + " " + ComboAmigos.precio);
    } 
    alert("Gracias por tu compra" + " " + nombre + ".");
    //
    option = "3";
}
//Inicio
//let option = prompt(`¿Cómo quieres tu Burger hoy? \n 1: COMBO \n 2: PERSONALIZADA \n 3: Volver`);



//bucle while
// while (option !== "3") {
//   if (option === "1"){
//     compracombo();
//     terminar();
//   }
//   if (option === "2"){
//     comprapersonalizada();
//     terminar();
//   }
// }
/*
//Se agrega el nombre de usuario al array de clientes
const nombres = [];
nombres.unshift(nombre);
console.log(nombres);
*/