//Variables de la maquina de café//
//Capacidad de productos dentro de la maquina//
let stockAgua = 5000;  //Cantidad de agua en mililitros//       
let stockCafe = 1000;  //Cantidad de café en gramos//   
let stockLeche = 2500;  //Cantidad de leche en mililitros//      
let stockChocolate = 1500;   //Cantidad de chocolate en gramos//
let stockAzucar = 1500;       //Cantidad de azúcar en gramos//
let Vasos = 100;           //Cantidad de vasos en unidad//


//Catalogo de productos//
//Cantidad de ingredientes necesarios para preparar cada producto y su precio en pesos colombianos//
const recetasCafe = {
    espresso: {
        nombre: "Espresso",
        agua: 35, //Mililitros de agua necesarios para preparar el espresso//      
        cafe: 15, //Gramos de café necesarios para preparar el espresso//
        precio: 2000, //Precio del espresso en pesos colombianos//    
    },
    americano: {
        nombre: "Americano",
        agua: 100, //Mililitros de agua necesarios para preparar el americano//
        cafe: 15, //Gramos de café necesarios para preparar el americano//
        precio: 2800 //Precio del americano en pesos colombianos//
    },
    cappuccino: {
        nombre: "Cappuccino",
        agua: 25, //Mililitros de agua necesarios para preparar el cappuccino//
        cafe: 20, //Gramos de café necesarios para preparar el cappuccino//
        leche: 150, //Mililitros de leche necesarios para preparar el cappuccino//
        precio: 3500 //Precio del cappuccino en pesos colombianos//
    },
    latte: {
        nombre: "Latte",
        agua: 45, //Mililitros de agua necesarios para preparar el latte//
        cafe: 20, //Gramos de café necesarios para preparar el latte//
        leche: 160, //Mililitros de leche necesarios para preparar el latte//
        precio: 4000 //Precio del latte en pesos colombianos//
    },
    mocaccino: {
        nombre: "Mocaccino",
        agua: 40, //Mililitros de agua necesarios para preparar el mocaccino//
        cafe: 15, //Gramos de café necesarios para preparar el mocaccino//
        leche: 120, //Mililitros de leche necesarios para preparar el mocaccino//
        chocolate: 30, //Gramos de chocolate necesarios para preparar el mocaccino//
        precio: 4600 //Precio del mocaccino en pesos colombianos//
    },
    chocolateCaliente: {
        nombre: "Chocolate Caliente",
        agua: 100, //Mililitros de agua necesarios para preparar el chocolate caliente//
        leche: 120, //Mililitros de leche necesarios para preparar el chocolate caliente//
        chocolate: 40, //Gramos de chocolate necesarios para preparar el chocolate caliente//
        precio: 3500 //Precio del chocolate caliente en pesos colombianos//
    }
}

//Reglas de negocio//
// Ejemplo: El espresso cuesta 2000, pero el usuario solo ha ingresado 1800//
if (dineroIngresado < recetaSeleccionada.precio) {
    let faltante = recetaSeleccionada.precio - dineroIngresado;
    console.log(`❌ Dinero insuficiente. Ingrese $${faltante} COP adicionales para completar su compra.`);
}
//Ejemplo: El americano cuesta 2800, pero el usuario ha ingresado 3000//
if (dineroIngresado > recetaSeleccionada.precio) {
    let cambio = dineroIngresado - recetaSeleccionada.precio;
    console.log(`💵 Compra realizada. Su cambio es: $${cambio} COP.`);
    dineroIngresado = 0; // Se reinicia el saldo cargado
}

//Ejmeplo: El cliente ha seleccionado un cappuccino, pero la máquina no tiene vasos disponibles//
if (stockVasos <= 0) {
    console.log("⚠️ Error: No hay vasos disponibles en la máquina. Por favor espere a mantenimiento.");
}


//Ejemplo: El cliente ha seleccionado un mocaccino, pero la máquina no tiene insumos disponibles//
if (stockAgua < recetaSeleccionada.agua) {
    console.log("⚠️ Insumo insuficiente: No hay agua suficiente para preparar esta bebida.");
}

if (stockLeche < recetaSeleccionada.leche) {
    console.log("⚠️ Insumo insuficiente: No hay suficiente leche para preparar esta bebida.");
}

if (stockChocolate < recetaSeleccionada.chocolate) {
    console.log("⚠️ Insumo insuficiente: No hay suficiente chocolate para preparar esta bebida.");
}

//Ejemplo: El cliente ha seleccionado un latte y quiere agregar 2 cucharadas de azúcar//
let nivelAzucarDeseado = 2; // Gramos de azúcar seleccionados (0 a 5 cucharadas)

if (stockAzucar < nivelAzucarDeseado * 5) { // Cada nivel usa 5g
    console.log("⚠️ Advertencia: No hay suficiente azúcar, la bebida se servirá sin azúcar.");
    nivelAzucarDeseado = 0;
}

// Si el pago y el stock son correctos. Se procede a preparar la bebida y descontar los insumos utilizados//
stockAgua -= recetaSeleccionada.agua;
stockCafe -= recetaSeleccionada.cafe;
stockLeche -= recetaSeleccionada.leche;
stockChocolate -= recetaSeleccionada.chocolate;
stockVasos -= 1;   // Se utiliza 1 vaso //

console.log("☕ ¡Su bebida está lista! Disfrútela.");

//FONDO DE CAJA DE LA MÁQUINA (Dinero disponible para dar vueltos)
let fondoCajaEfectivo = 200000; // Total de dinero en la máquina en COP (ej. $200.000)

// Denominaciones aceptadas por el lector de billetes
const billetesAceptados = [2000, 5000, 10000, 20000, 50000];