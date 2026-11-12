//Variables de la maquina de café//

let CantidadCafe = 1000;       // g
let CantidadLeche = 2500;      // ml
let CantidadChocolate = 1500;  // g
let CantidadAzucar = 1500;     // g
let CantidadVasos = 100;       // unidades

// Cantidad minima para la receta//

let minCafe = 10;           // g
let minLeche = 100;         // ml
let minChocolate = 30;      // g
let minAzucar = 10;         // g
let minVasos = 1;           // unidades

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
 
if (CantidadCafe <= minCafe || CantidadLeche <= minLeche || CantidadChocolate <= minChocolate || CantidadAzucar <= minAzucar || CantidadVasos <= minVasos) {
  console.log("La máquina de café no tiene suficientes insumos para preparar bebidas.");
}

if (CantidadCafe > minCafe && CantidadLeche > minLeche && CantidadChocolate > minChocolate && CantidadAzucar > minAzucar && CantidadVasos > minVasos) {
  console.log("La máquina de café tiene suficientes insumos para preparar bebidas.");
}


if (minCafe <= 10 && minLeche <= 100 && minChocolate <= 30 && minAzucar <= 10 && minVasos <= 1) {
  console.log("La cantidad de insumos es suficiente para preparar bebidas.");
}
  else {
    console.log("La cantidad de insumos no es suficiente para preparar bebidas.");
  }


//Preparacion para hacer el cafe quitando los insumos necesaros de la maquina para la receta//

function restarvaso(){
return CantidadVasos = CantidadVasos - 1
}


switch(recetasCafe){
    case "espresso":
      restarvaso();
      CantidadCafe = CantidadCafe - espresso;
      CantidadAzucar = CantidadAzucar - espresso;
      CantidadLeche = CantidadLeche - espresso;
      CantidadChocolate =  CantidadChocolate - espresso;
      CantidadVasos = CantidadVasos - 1;
      break;
    case "americano":
      restarvaso();
      CantidadCafe = CantidadCafe - americano;
      CantidadAzucar = CantidadAzucar - americano;
      CantidadLeche = CantidadLeche - americano;
      CantidadChocolate =  CantidadChocolate - americano;
      CantidadVasos = CantidadVasos - 1;
      break;
    case "cappuccino":
      restarvaso();
      CantidadCafe = CantidadCafe - cappuccino;
      CantidadAzucar = CantidadAzucar - cappuccino;
      CantidadLeche = CantidadLeche - cappuccino;
      CantidadChocolate =  CantidadChocolate - cappuccino;
      CantidadVasos = CantidadVasos - 1;
      break;
    case "latte":
      restarvaso();
      CantidadCafe = CantidadCafe - latte;
      CantidadAzucar = CantidadAzucar - latte;
      CantidadLeche = CantidadLeche - latte;
      CantidadChocolate =  CantidadChocolate - latte;
      CantidadVasos = CantidadVasos - 1;
      break;
    case "mocaccino":
      restarvaso();
      CantidadCafe = CantidadCafe - mocaccino;
      CantidadAzucar = CantidadAzucar - mocaccino;
      CantidadLeche = CantidadLeche - mocaccino;
      CantidadChocolate =  CantidadChocolate - mocaccino;
      CantidadVasos = CantidadVasos - 1;
      break;
    case "chocolate":
      restarvaso();
      CantidadCafe = CantidadCafe - chocolate;
      CantidadAzucar = CantidadAzucar - chocolate;
      CantidadLeche = CantidadLeche - chocolate;
      CantidadChocolate =  CantidadChocolate - chocolate;
      CantidadVasos = CantidadVasos - 1;
      break;
    default:
      console.log("La opcion no es valida. Seleccione un número del 1 al 6");
      break;
}

