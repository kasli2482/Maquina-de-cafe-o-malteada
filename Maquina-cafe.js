//Variables de la maquina de café//

let stockAgua = 4000;  //Cantidad de agua//       
let stockCafe = 1000;  //Cantidad de café//   
let stockLeche = 2500;  //Cantidad de leche//      
let stockChocolate = 1500;   //Cantidad de chocolate//
let stockAzucar = 1500;       //Cantidad de azúcar//
let Vasos = 100;           //Cantidad de vasos//
let temperaturaCaldera = 25;  //Temperatura inicial de la maquina// 
let dineroIngresado = 0;         //Dinero ingresado por el usuario//
let productoSeleccionado = ""   //Producto seleccionado por el usuario//

//Catalogo de productos//
const recetasCafe = {
    espresso: {
        nomnbre: "Espresso",
    },
    americano: {
        nombre: "Americano",
    },
    cappuccino: {
        nombre: "Cappuccino",
    },
    latte: {
        nombre: "Latte",
    },
    mocaccino: {
        nombre: "Mocaccino",
    },
    chocolateCaliente: {
        nombre: "Chocolate Caliente",
    }
}