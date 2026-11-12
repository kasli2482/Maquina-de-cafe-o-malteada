//Variables de la maquina de café//

let CantidadCafe = 1000;      // g
let CantidadAgua = 5000;      // ml
let CantidadLeche = 2500;     // ml
let CantidadChocolate = 1500; // g
let CantidadAzucar = 1500;    // g
let CantidadVasos = 100;      // unidades

// Cantidad minima para la receta//

let minCafe = 10;      // g
let minAgua = 25;      // ml
let minLeche = 100;    // ml
let minChocolate = 30; // g
let minAzucar = 10;    // g
let minVasos = 1;      // unidades

const GramosPorCucharada = 10;

//Cantidad de dinero de la maquina//

const cantidadinero = {
  moneda100: 100,
  moneda200: 200,
  moneda500: 500,
  moneda1000: 1000,

  billete2000: 2000,
  billete5000: 5000,
  billete10000: 10000,
  billete20000: 20000,
};

let cantmoneda100 = 200;
let cantmoneda200 = 150;
let cantmoneda500 = 100;
let cantmoneda1000 = 100;

let cantbillete2000 = 100;
let cantbillete5000 = 100;
let cantbillete10000 = 50;
let cantbillete20000 = 20;

//Catalogo de productos y sus recetas//

const recetasCafe = {
  espresso: { agua: 35, cafe: 15, leche: 0, chocolate: 0, precio: 2000 },
  americano: { agua: 100, cafe: 15, leche: 0, chocolate: 0, precio: 2800 },
  cappuccino: { agua: 25, cafe: 20, leche: 150, chocolate: 0, precio: 3500 },
  latte: { agua: 45, cafe: 20, leche: 160, chocolate: 0, precio: 4000 },
  mocaccino: { agua: 40, cafe: 15, leche: 120, chocolate: 30, precio: 4600 },
  chocolate: { agua: 100, cafe: 0, leche: 120, chocolate: 40, precio: 3500 },
};

//Restar un vaso de la maquina//
function restarvaso() {
  CantidadVasos = CantidadVasos - 1;
  return CantidadVasos;
}

// Mira el stock real contra el mínimo.
function revisarInsumos() {
  if (
    CantidadCafe <= minCafe ||
    CantidadAgua <= minAgua ||
    CantidadLeche <= minLeche ||
    CantidadChocolate <= minChocolate ||
    CantidadAzucar <= minAzucar ||
    CantidadVasos <= minVasos
  ) {
    return "La máquina de café no tiene suficientes insumos para preparar algunas bebidas.";
  }

  return "La máquina de café tiene suficientes insumos para preparar bebidas.";
}

// Avisa qué insumo ya llegó al mínimo. Si no hay aviso, devuelve texto vacío.
function avisosStock() {
  let avisos = "";

  if (CantidadCafe <= minCafe) avisos = avisos + "café ";
  if (CantidadAgua <= minAgua) avisos = avisos + "agua ";
  if (CantidadLeche <= minLeche) avisos = avisos + "leche ";
  if (CantidadChocolate <= minChocolate) avisos = avisos + "chocolate ";
  if (CantidadAzucar <= minAzucar) avisos = avisos + "azúcar ";
  if (CantidadVasos <= minVasos) avisos = avisos + "vasos ";

  if (avisos === "") return "";
  return "Aviso: en el mínimo o por debajo: " + avisos.trim() + ".";
}


function elegirReceta(opcion) {
  switch (opcion) {
    case 1:
    case "1":
    case "espresso":
      return recetasCafe.espresso;
    case 2:
    case "2":
    case "americano":
      return recetasCafe.americano;
    case 3:
    case "3":
    case "cappuccino":
      return recetasCafe.cappuccino;
    case 4:
    case "4":
    case "latte":
      return recetasCafe.latte;
    case 5:
    case "5":
    case "mocaccino":
      return recetasCafe.mocaccino;
    case 6:
    case "6":
    case "chocolate":
      return recetasCafe.chocolate;
    default:
      return null;
  }
}

function nombreOpcion(opcion) {
  switch (opcion) {
    case 1:
    case "1":
    case "espresso":
      return "espresso";
    case 2:
    case "2":
    case "americano":
      return "americano";
    case 3:
    case "3":
    case "cappuccino":
      return "cappuccino";
    case 4:
    case "4":
    case "latte":
      return "latte";
    case 5:
    case "5":
    case "mocaccino":
      return "mocaccino";
    case 6:
    case "6":
    case "chocolate":
      return "chocolate";
    default:
      return "";
  }
}

// Revisa solo los insumos de la bebida elegida.
function insumosFaltantes(opcion, cucharadas) {
  const nombre = nombreOpcion(opcion);
  const receta = elegirReceta(opcion);
  const faltan = [];
  const azucar = cucharadas * GramosPorCucharada;

  if (!receta) {
    faltan.push("opción");
    return faltan;
  }

  switch (nombre) {
    case "espresso":
    case "americano":
      if (CantidadVasos < minVasos) faltan.push("vasos");
      if (CantidadCafe < receta.cafe) faltan.push("café");
      if (CantidadAgua < receta.agua) faltan.push("agua");
      if (CantidadAzucar < azucar) faltan.push("azúcar");
      break;
    case "cappuccino":
    case "latte":
      if (CantidadVasos < minVasos) faltan.push("vasos");
      if (CantidadCafe < receta.cafe) faltan.push("café");
      if (CantidadAgua < receta.agua) faltan.push("agua");
      if (CantidadLeche < receta.leche) faltan.push("leche");
      if (CantidadAzucar < azucar) faltan.push("azúcar");
      break;
    case "mocaccino":
      if (CantidadVasos < minVasos) faltan.push("vasos");
      if (CantidadCafe < receta.cafe) faltan.push("café");
      if (CantidadAgua < receta.agua) faltan.push("agua");
      if (CantidadLeche < receta.leche) faltan.push("leche");
      if (CantidadChocolate < receta.chocolate) faltan.push("chocolate");
      if (CantidadAzucar < azucar) faltan.push("azúcar");
      break;
    case "chocolate":
      if (CantidadVasos < minVasos) faltan.push("vasos");
      if (CantidadAgua < receta.agua) faltan.push("agua");
      if (CantidadLeche < receta.leche) faltan.push("leche");
      if (CantidadChocolate < receta.chocolate) faltan.push("chocolate");
      if (CantidadAzucar < azucar) faltan.push("azúcar");
      break;
    default:
      faltan.push("opción");
      break;
  }

  return faltan;
}

// Descuenta los insumos dentro del switch.
function descontarInsumos(opcion, cucharadas) {
  const nombre = nombreOpcion(opcion);
  const azucar = cucharadas * GramosPorCucharada;

  switch (nombre) {
    case "espresso":
      CantidadCafe = CantidadCafe - recetasCafe.espresso.cafe;
      CantidadAgua = CantidadAgua - recetasCafe.espresso.agua;
      CantidadLeche = CantidadLeche - recetasCafe.espresso.leche;
      CantidadChocolate = CantidadChocolate - recetasCafe.espresso.chocolate;
      CantidadAzucar = CantidadAzucar - azucar;
      restarvaso();
      break;
    case "americano":
      CantidadCafe = CantidadCafe - recetasCafe.americano.cafe;
      CantidadAgua = CantidadAgua - recetasCafe.americano.agua;
      CantidadLeche = CantidadLeche - recetasCafe.americano.leche;
      CantidadChocolate = CantidadChocolate - recetasCafe.americano.chocolate;
      CantidadAzucar = CantidadAzucar - azucar;
      restarvaso();
      break;
    case "cappuccino":
      CantidadCafe = CantidadCafe - recetasCafe.cappuccino.cafe;
      CantidadAgua = CantidadAgua - recetasCafe.cappuccino.agua;
      CantidadLeche = CantidadLeche - recetasCafe.cappuccino.leche;
      CantidadChocolate = CantidadChocolate - recetasCafe.cappuccino.chocolate;
      CantidadAzucar = CantidadAzucar - azucar;
      restarvaso();
      break;
    case "latte":
      CantidadCafe = CantidadCafe - recetasCafe.latte.cafe;
      CantidadAgua = CantidadAgua - recetasCafe.latte.agua;
      CantidadLeche = CantidadLeche - recetasCafe.latte.leche;
      CantidadChocolate = CantidadChocolate - recetasCafe.latte.chocolate;
      CantidadAzucar = CantidadAzucar - azucar;
      restarvaso();
      break;
    case "mocaccino":
      CantidadCafe = CantidadCafe - recetasCafe.mocaccino.cafe;
      CantidadAgua = CantidadAgua - recetasCafe.mocaccino.agua;
      CantidadLeche = CantidadLeche - recetasCafe.mocaccino.leche;
      CantidadChocolate = CantidadChocolate - recetasCafe.mocaccino.chocolate;
      CantidadAzucar = CantidadAzucar - azucar;
      restarvaso();
      break;
    case "chocolate":
      CantidadCafe = CantidadCafe - recetasCafe.chocolate.cafe;
      CantidadAgua = CantidadAgua - recetasCafe.chocolate.agua;
      CantidadLeche = CantidadLeche - recetasCafe.chocolate.leche;
      CantidadChocolate = CantidadChocolate - recetasCafe.chocolate.chocolate;
      CantidadAzucar = CantidadAzucar - azucar;
      restarvaso();
      break;
    default:
      console.log("La opcion no es valida. Seleccione un número del 1 al 6");
      break;
  }
}

function registrarVenta(nombre, precio) {
  switch (nombre) {
    case "espresso":
      ventasEspresso = ventasEspresso + 1;
      break;
    case "americano":
      ventasAmericano = ventasAmericano + 1;
      break;
    case "cappuccino":
      ventasCappuccino = ventasCappuccino + 1;
      break;
    case "latte":
      ventasLatte = ventasLatte + 1;
      break;
    case "mocaccino":
      ventasMocaccino = ventasMocaccino + 1;
      break;
    case "chocolate":
      ventasChocolate = ventasChocolate + 1;
      break;
    default:
      break;
  }

  dineroRecaudado = dineroRecaudado + precio;
}

// Lee cuántas monedas o billetes de ese valor hay en la máquina.
function cantidadDe(valor) {
  switch (valor) {
    case cantidadinero.moneda100:
      return cantmoneda100;
    case cantidaddinero.moneda200:
      return cantmoneda200;
    case cantidaddinero.moneda500:
      return cantmoneda500;
    case cantidaddinero.moneda1000:
      return cantmoneda1000;
    case cantidaddinero.billete2000:
      return cantbillete2000;
    case cantidaddinero.billete5000:
      return cantbillete5000;
    case cantidaddinero.billete10000:
      return cantbillete10000;
    case cantidaddinero.billete20000:
      return cantbillete20000;
    default:
      return 0;
  }
}

// Guarda la nueva cantidad de esa moneda o billete.
function guardarCantidad(valor, cantidad) {
  switch (valor) {
    case cantidaddinero.moneda100:
      cantmoneda100 = cantidad;
      break;
    case cantidaddinero.moneda200:
      cantmoneda200 = cantidad;
      break;
    case cantidaddinero.moneda500:
      cantmoneda500 = cantidad;
      break;
    case cantidaddinero.moneda1000:
      cantmoneda1000 = cantidad;
      break;
    case cantidaddinero.billete2000:
      cantbillete2000 = cantidad;
      break;
    case cantidaddinero.billete5000:
      cantbillete5000 = cantidad;
      break;
    case cantidaddinero.billete10000:
      cantbillete10000 = cantidad;
      break;
    case cantidaddinero.billete20000:
      cantbillete20000 = cantidad;
      break;
    default:
      break;
  }
}

function meterEnCaja(piezas) {
  for (const valor of piezas) {
    guardarCantidad(valor, cantidadDe(valor) + 1);
  }
}

function sacarDeCaja(piezas) {
  for (const valor of piezas) {
    guardarCantidad(valor, cantidadDe(valor) - 1);
  }
}

function sumarDinero(piezas) {
  let total = 0;
  for (const valor of piezas) {
    total = total + valor;
  }
  return total;
}

function billeteInvalido(piezas) {
  for (const valor of piezas) {
    switch (valor) {
      case cantidaddinero.moneda100:
      case cantidaddinero.moneda200:
      case cantidaddinero.moneda500:
      case cantidaddinero.moneda1000:
      case cantidaddinero.billete2000:
      case cantidaddinero.billete5000:
      case cantidaddinero.billete10000:
      case cantidaddinero.billete20000:
        break;
      default:
        return valor;
    }
  }
  return null;
}

// Arma el vuelto. Si no puede devolver el monto exacto, devuelve null.
function calcularVuelto(monto) {
  const valores = [
    cantidaddinero.billete20000,
    cantidaddinero.billete10000,
    cantidaddinero.billete5000,
    cantidaddinero.billete2000,
    cantidaddinero.moneda1000,
    cantidaddinero.moneda500,
    cantidaddinero.moneda200,
    cantidaddinero.moneda100,
  ];

  const entrega = [];
  let falta = monto;

  for (const valor of valores) {
    let disponibles = cantidadDe(valor);
    while (disponibles > 0 && falta >= valor) {
      entrega.push(valor);
      disponibles = disponibles - 1;
      falta = falta - valor;
    }
  }

  if (falta !== 0) return null;
  return entrega;
}

// Arma el resultado de una falla. ok: false significa que la venta no se hizo.
function falla(tipo, mensaje) {
  return { ok: false, falla: tipo, mensaje: mensaje };
}

// Función principal.
// opcion: 1 a 6, o el nombre ("latte")
// pago: lista de billetes y monedas, por ejemplo [2000, 2000]
// cucharadasAzucar: 0, 1, 2... Si no la envías, queda en 0
function prepararBebida(opcion, pago, cucharadasAzucar) {
  if (cucharadasAzucar === undefined) cucharadasAzucar = 0;

  const receta = elegirReceta(opcion);
  const nombre = nombreDeOpcion(opcion);

  if (!receta) {
    return falla("opcion", "La opcion no es valida. Seleccione un número del 1 al 6");
  }

  if (!Number.isInteger(cucharadasAzucar) || cucharadasAzucar < 0) {
    return falla("azucar", "Las cucharadas de azúcar tienen que ser 0, 1, 2...");
  }

  if (!Array.isArray(pago)) {
    return falla("dinero", "El pago tiene que ser una lista. Ejemplo: [5000] o [2000, 2000].");
  }

  const malo = billeteInvalido(pago);
  if (malo !== null) {
    const texto = Number.isNaN(malo) ? "un valor que no es un número" : "$" + malo;
    return falla("dinero", "No acepto " + texto + ". Solo 100, 200, 500, 1000, 2000, 5000, 10000 y 20000.");
  }

  const faltan = insumosFaltantes(opcion, cucharadasAzucar);
  if (faltan.length > 0) {
    return falla("insumos", "Falla de insumos: no hay suficiente " + faltan.join(", ") + ". No se cobró nada.");
  }

  const pagado = sumarDinero(pago);
  if (pagado < receta.precio) {
    return falla(
      "dinero",
      "Dinero insuficiente. El " +
        nombre +
        " vale $" +
        receta.precio +
        " y pagaste $" +
        pagado +
        ". Faltan $" +
        (receta.precio - pagado) +
        "."
    );
  }

  // El pago entra a la caja. Si no hay vuelto, se devuelve y no se descuentan insumos.
  meterEnCaja(pago);

  const vuelto = pagado - receta.precio;
  const piezasVuelto = vuelto === 0 ? [] : calcularVuelto(vuelto);

  if (piezasVuelto === null) {
    sacarDeCaja(pago);
    return falla("vuelto", "Falla: no tengo cambio para $" + vuelto + ". Te devuelvo tus $" + pagado + ".");
  }

  sacarDeCaja(piezasVuelto);
  descontarInsumos(opcion, cucharadasAzucar);
  registrarVenta(nombre, receta.precio);

  const textoVuelto = vuelto === 0 ? "Vuelto $0." : "Vuelto $" + vuelto + " en: " + piezasVuelto.join(", ") + ".";
  const aviso = avisosDeStock();
  const extra = aviso === "" ? "" : " " + aviso;

  return {
    ok: true,
    falla: null,
    mensaje: "Listo: " + nombre + ". Cobrados $" + receta.precio + ". " + textoVuelto + extra,
    bebida: nombre,
    precio: receta.precio,
    pagado: pagado,
    vuelto: vuelto,
    piezasVuelto: piezasVuelto,
  };
}

function dineroEnCaja() {
  return (
    cantmoneda100 * cantidaddinero.moneda100 +
    cantmoneda200 * cantidaddinero.moneda200 +
    cantmoneda500 * cantidaddinero.moneda500 +
    cantmoneda1000 * cantidaddinero.moneda1000 +
    cantbillete2000 * cantidaddinero.billete2000 +
    cantbillete5000 * cantidaddinero.billete5000 +
    cantbillete10000 * cantidaddinero.billete10000 +
    cantbillete20000 * cantidaddinero.billete20000
  );
}

function textoEstado() {
  return [
    "--- Estado ---",
    "Café: " + CantidadCafe + " g",
    "Agua: " + CantidadAgua + " ml",
    "Leche: " + CantidadLeche + " ml",
    "Chocolate: " + CantidadChocolate + " g",
    "Azúcar: " + CantidadAzucar + " g",
    "Vasos: " + CantidadVasos,
    "Dinero en caja: $" + dineroEnCaja(),
    "Recaudado en ventas: $" + dineroRecaudado,
    revisarInsumosGenerales(),
  ].join("\n");
}

function textoReporte() {
  const total =
    ventasEspresso + ventasAmericano + ventasCappuccino + ventasLatte + ventasMocaccino + ventasChocolate;

  return [
    "--- Reporte ---",
    "Espresso: " + ventasEspresso,
    "Americano: " + ventasAmericano,
    "Cappuccino: " + ventasCappuccino,
    "Latte: " + ventasLatte,
    "Mocaccino: " + ventasMocaccino,
    "Chocolate: " + ventasChocolate,
    "Total de bebidas: " + total,
    "Dinero recaudado: $" + dineroRecaudado,
  ].join("\n");
}

function reponerInsumos() {
  CantidadCafe = 1000;
  CantidadAgua = 5000;
  CantidadLeche = 2500;
  CantidadChocolate = 1500;
  CantidadAzucar = 1500;
  CantidadVasos = 100;
  return "Insumos repuestos.";
}

function textoMenu() {
  return [
    "=== Máquina de café ===",
    "1. Espresso     $2000",
    "2. Americano    $2800",
    "3. Cappuccino   $3500",
    "4. Latte        $4000",
    "5. Mocaccino    $4600",
    "6. Chocolate    $3500",
    "7. Reporte de ventas",
    "8. Reponer insumos",
    "0. Ver estado",
    "Escribe salir para terminar.",
    "El azúcar no se cobra. Cada cucharada gasta " + GramosPorCucharada + " g.",
  ].join("\n");
}

// Pregunta en la terminal hasta que escribas salir.
async function iniciarMaquina() {
  const readline = await import("node:readline");
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  function preguntar(texto) {
    return new Promise(function (resolver) {
      rl.question(texto, resolver);
    });
  }

  console.log(revisarInsumosGenerales());
  console.log(textoMenu());

  while (true) {
    const opcionTexto = (await preguntar("\nNúmero de bebida: ")).trim().toLowerCase();
    if (opcionTexto === "salir") break;

    if (opcionTexto === "0") {
      console.log(textoEstado());
      continue;
    }
    if (opcionTexto === "7") {
      console.log(textoReporte());
      continue;
    }
    if (opcionTexto === "8") {
      console.log(reponerInsumos());
      continue;
    }

    const azucarTexto = await preguntar("Cucharadas de azúcar: ");
    const pagoTexto = await preguntar("Billetes y monedas separados por espacio: ");
    const pago = pagoTexto.trim() === "" ? [] : pagoTexto.trim().split(/\s+/).map(Number);
    const resultado = prepararBebida(Number(opcionTexto), pago, Number(azucarTexto));
    console.log(resultado.mensaje);
  }

  rl.close();
}

function demostrar() {
  console.log(revisarInsumosGenerales());
  console.log("");
  console.log(textoMenu());
  console.log("");
  console.log(prepararBebida(1, [2000], 1).mensaje);
  console.log(prepararBebida(3, [1000], 0).mensaje);
  console.log(prepararBebida(4, [10000], 0).mensaje);
  console.log(prepararBebida(6, [2000, 2000], 0).mensaje);
  console.log(prepararBebida(9, [5000], 0).mensaje);
  console.log("");
  console.log(textoReporte());
  console.log("");
  console.log(textoEstado());
}

const esNode = typeof process !== "undefined" && Array.isArray(process.argv);

if (esNode && process.argv.includes("--usar")) {
  iniciarMaquina();
} else if (esNode) {
  demostrar();
}