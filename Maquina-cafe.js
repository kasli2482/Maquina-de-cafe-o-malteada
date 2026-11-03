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

//Catalogio de productos y sus recetas//
const recetasCafe = {
  espresso: { nombre: "Espresso", agua: 35, cafe: 15, leche: 0, chocolate: 0, precio: 2000 },
  americano: { nombre: "Americano", agua: 100, cafe: 15, leche: 0, chocolate: 0, precio: 2800 },
  cappuccino: { nombre: "Cappuccino", agua: 25, cafe: 20, leche: 150, chocolate: 0, precio: 3500 },
  latte: { nombre: "Latte", agua: 45, cafe: 20, leche: 160, chocolate: 0, precio: 4000 },
  mocaccino: { nombre: "Mocaccino", agua: 40, cafe: 15, leche: 120, chocolate: 30, precio: 4600 },
  chocolate: { nombre: "Chocolate Caliente", agua: 100, cafe: 0, leche: 120, chocolate: 40, precio: 3500 }
};
 
if (CantidadCafe <= minCafe || CantidadLeche <= minLeche || CantidadChocolate <= minChocolate || CantidadAzucar <= minAzucar || CantidadVasos <= minVasos) {
  console.log("La máquina de café no tiene suficiente stock para preparar bebidas.");
}

if (CantidadCafe > minCafe && CantidadLeche > minLeche && CantidadChocolate > minChocolate && CantidadAzucar > minAzucar && CantidadVasos > minVasos) {
  console.log("La máquina de café tiene suficiente stock para preparar bebidas.");
}


if (minCafe <= 10 && minLeche <= 100 && minChocolate <= 30 && minAzucar <= 10 && minVasos <= 1) {
  console.log("La cantidad de insumos es suficiente para preparar bebidas.");
}
  else {
    console.log("La cantidad de insumos no es suficiente para preparar bebidas.");
  }
