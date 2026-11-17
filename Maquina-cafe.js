//Variables de la maquina de café//

const MaquinaCafe = {
  CantidadCafe: 1000,       // g
  CantidadLeche: 2500,      // ml
  CantidadChocolate: 1500,  // g
  CantidadAzucar: 1500,     // g
  CantidadVasos: 100,       // unidades
  CantidadAgua: 5000        // ml
};

// Cantidad minima para la receta//

const Minrecetas = {
  minCafe: 10,           // g
  minLeche: 100,         // ml
  minAgua: 100,          // ml
  minChocolate: 30,      // g
  minAzucar: 10,         // g
  minVasos: 1,           // unidades
  minAgua: 100            // ml
};

//Cantidad de dinerode la maquina//

const cantidaddinero = {
  moneda100: 100,
  moneda200: 200,
  moneda500: 500,
  moneda1000: 1000,

  billete2000: 2000,
  billete5000: 5000,
  billete10000: 10000,
  billete20000: 20000,
}

let cantmoneda100 = 200;
let cantmoneda200 = 150;
let cantmoneda500 = 100;
let cantmoneda1000 = 100;

let cantbillete2000 = 100;
let cantbillete5000 = 100;
let cantbillete10000 = 50;
let cantbillete20000 = 20;

//Catalogio de productos y sus recetas//

const recetasCafe = {
  espresso: { agua: 35, cafe: 15, leche: 0, chocolate: 0, precio: 2000 },
  americano: { agua: 100, cafe: 15, leche: 0, chocolate: 0, precio: 2800 },
  cappuccino: { agua: 25, cafe: 20, leche: 150, chocolate: 0, precio: 3500 },
  latte: { agua: 45, cafe: 20, leche: 160, chocolate: 0, precio: 4000 },
  mocaccino: { agua: 40, cafe: 15, leche: 120, chocolate: 30, precio: 4600 },
  chocolate: { agua: 100, cafe: 0, leche: 120, chocolate: 40, precio: 3500 }
};
 
if (CantidadCafe <= Minrecetas.minCafe || CantidadLeche <= Minrecetas.minLeche || CantidadChocolate <= Minrecetas.minChocolate || CantidadAzucar <= Minrecetas.minAzucar || CantidadVasos <= Minrecetas.minVasos) {
  console.log("La máquina de café no tiene suficientes insumos para preparar bebidas.");
}

if (CantidadCafe > Minrecetas.minCafe && CantidadLeche > Minrecetas.minLeche && CantidadChocolate > Minrecetas.minChocolate && CantidadAzucar > Minrecetas.minAzucar && CantidadVasos > Minrecetas.minVasos) {
  console.log("La máquina de café tiene suficientes insumos para preparar bebidas.");
}


if (Minrecetas.minCafe <= 10 && Minrecetas.minLeche <= 100 && Minrecetas.minChocolate <= 30 && Minrecetas.minAzucar <= 10 && Minrecetas.minVasos <= 1) {
  console.log("La cantidad de insumos es suficiente para preparar bebidas.");
}
  else {
    console.log("La cantidad de insumos no es suficiente para preparar bebidas.");
  }

 //Verificacion de insumos//

 function revisarInsumos(){
  if (
    CantidadCafe <= Minrecetas.minCafe ||
    CantidadAgua <= Minrecetas.minAgua ||
    CantidadLeche <= Minrecetas.minLeche ||
    CantidadChocolate <= Minrecetas.minChocolate ||
    CantidadAzucar <= Minrecetas.minAzucar ||
    CantidadVasos <= Minrecetas.minVasos
   ) {
    return "La máquina de café no tiene suficientes insumos.";
  }
  else{
  return "La máquina de café tiene suficientes insumos.";
  }}

function dineroingresado(){
  return cantmoneda100 * moneda100 + cantmoneda200 * moneda200 + cantmoneda500 * moneda500 + cantmoneda1000 * moneda1000 + cantbillete2000 * billete2000 + cantbillete5000 * billete5000 + cantbillete10000 * billete10000 + cantbillete20000 * billete20000;
}

function calculardinero() {
  return denominaciones.reduce(
    (total, valor) => total + valor * (caja[valor] || 0),
    0
  );
}

switch(recetasCafe){
    case "espresso":
      restarvaso();
      CantidadCafe = CantidadCafe - espresso;
      CantidadAzucar = CantidadAzucar - espresso;
      CantidadLeche = CantidadLeche - espresso;
      CantidadChocolate =  CantidadChocolate - espresso;
      break;
    case "americano":
      restarvaso();
      CantidadCafe = CantidadCafe - americano;
      CantidadAzucar = CantidadAzucar - americano;
      CantidadLeche = CantidadLeche - americano;
      CantidadChocolate =  CantidadChocolate - americano;
      break;
    case "cappuccino":
      restarvaso();
      CantidadCafe = CantidadCafe - cappuccino;
      CantidadAzucar = CantidadAzucar - cappuccino;
      CantidadLeche = CantidadLeche - cappuccino;
      CantidadChocolate =  CantidadChocolate - cappuccino;
      break;
    case "latte":
      restarvaso();
      CantidadCafe = CantidadCafe - latte;
      CantidadAzucar = CantidadAzucar - latte;
      CantidadLeche = CantidadLeche - latte;
      CantidadChocolate =  CantidadChocolate - latte;
      break;
    case "mocaccino":
      restarvaso();
      CantidadCafe = CantidadCafe - mocaccino;
      CantidadAzucar = CantidadAzucar - mocaccino;
      CantidadLeche = CantidadLeche - mocaccino;
      CantidadChocolate =  CantidadChocolate - mocaccino;
      break;
    case "chocolate":
      restarvaso();
      CantidadCafe = CantidadCafe - chocolate;
      CantidadAzucar = CantidadAzucar - chocolate;
      CantidadLeche = CantidadLeche - chocolate;
      CantidadChocolate =  CantidadChocolate - chocolate;
      break;
    default:s
      console.log("La opcion no es valida. Seleccione un número del 1 al 6");
      break;
}

function validarinsumos(cafe, leche, chocolate, azucar, vasos, agua) {
return
  if ( espresso <= mincafe)
    console.log("Hay suficintes insumos para preparar la bebida");
  else {
    console.log("No hay suficientes insumos para preparar la bebida");
  }
  if (americano <= Minrecetas)  
    console.log("Hay suficintes insumos para preparar la bebida"); 
  else {
    console.log("No hay suficientes insumos para preparar la bebida");
  }
  if (cappuccino <= Minrecetas)
    console.log("Hay suficintes insumos para preparar la bebida"); 
  else {
    console.log("No hay suficientes insumos para preparar la bebida");
  }
  if (latte <= Minrecetas)
    console.log("Hay suficintes insumos para preparar la bebida");
  else {
    console.log("No hay suficientes insumos para preparar la bebida");
  }
  if (mocaccino <= Minrecetas)
    console.log("Hay suficintes insumos para preparar la bebida");
  else {
    console.log("No hay suficientes insumos para preparar la bebida");
  }
  if (chocolate <= Minrecetas)
    console.log("Hay suficintes insumos para preparar la bebida");
  else {
    console.log("No hay suficientes insumos para preparar la bebida");
  }
  if (CantidadVasos <= Minrecetas.minVasos)
    console.log("Hay suficientes vasos para preparar la bebida");
  else {
    console.log("No hay suficientes vasos para preparar la bebida");
  }
}

function restarvaso(){
return CantidadVasos = CantidadVasos - 1
}

function restarInsumos(cafe, leche, chocolate, azucar, vasos, agua) {
return cantidadCafe = cafe - CantidadCafe;
return cantidadLeche = leche - CantidadLeche;
return cantidadChocolate = chocolate - CantidadChocolate;
return cantidadAzucar = azucar - CantidadAzucar;
return cantidadVasos = vasos - CantidadVasos;
return cantidadAgua = agua - CantidadAgua;
}
