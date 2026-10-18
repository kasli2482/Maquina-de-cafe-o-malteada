//Variables de la maquina de café//

let stockAgua = 5000;       // ml
let stockCafe = 1000;       // g
let stockLeche = 2500;      // ml
let stockChocolate = 1500;  // g
let stockAzucar = 1500;     // g
let Vasos = 100;            // unidades
 
//Catalogio de productos//
const recetasCafe = {
  espresso: { nombre: "Espresso", agua: 35, cafe: 15, leche: 0, chocolate: 0, precio: 2000 },
  americano: { nombre: "Americano", agua: 100, cafe: 15, leche: 0, chocolate: 0, precio: 2800 },
  cappuccino: { nombre: "Cappuccino", agua: 25, cafe: 20, leche: 150, chocolate: 0, precio: 3500 },
  latte: { nombre: "Latte", agua: 45, cafe: 20, leche: 160, chocolate: 0, precio: 4000 },
  mocaccino: { nombre: "Mocaccino", agua: 40, cafe: 15, leche: 120, chocolate: 30, precio: 4600 },
  chocolate: { nombre: "Chocolate Caliente", agua: 100, cafe: 0, leche: 120, chocolate: 40, precio: 3500 }
};
 
