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
        agua: 35,       
        cafe: 15,          
        precio: 2000    
    },
    americano: {
        nombre: "Americano",
        agua: 100,      
        cafe: 15,   
        precio: 2800    
    },
    cappuccino: {
        nombre: "Cappuccino",
        agua: 25,      
        cafe: 20,       
        leche: 150,   
        precio: 3500    
    },
    latte: {
        nombre: "Latte",
        agua: 45,       
        cafe: 20,       
        leche: 160,    
        precio: 4000    
    },
    mocaccino: {
        nombre: "Mocaccino",
        agua: 40,            
        cafe: 15,      
        leche: 120,     
        chocolate: 30,  
        precio: 4600  
    },
    chocolateCaliente: {
        nombre: "Chocolate Caliente",
        agua: 100,       
        leche: 120,      
        chocolate: 40,  
        precio: 3500   
    }
}