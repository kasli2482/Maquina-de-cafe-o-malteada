
// 1. DATOS INICIALES //

const stockInicial = {
  cafe: 1000,
  agua: 5000,
  leche: 2500,
  chocolate: 1500,
  azucar: 1500,
  vasos: 100
};

const dineroInicial = {
  100: 200,
  200: 150,
  500: 100,
  1000: 100,
  2000: 100,
  5000: 100,
  10000: 50,
  20000: 20
};

const recetas = {
  espresso: {
    nombre: "Espresso",
    emoji: "☕",
    descripcion: "Café intenso y concentrado",
    agua: 35,
    cafe: 15,
    leche: 0,
    chocolate: 0,
    precio: 2000
  },
  americano: {
    nombre: "Americano",
    emoji: "🖤",
    descripcion: "Café suave y aromático",
    agua: 100,
    cafe: 15,
    leche: 0,
    chocolate: 0,
    precio: 2800
  },
  cappuccino: {
    nombre: "Cappuccino",
    emoji: "🥛",
    descripcion: "Café con leche espumosa",
    agua: 25,
    cafe: 20,
    leche: 150,
    chocolate: 0,
    precio: 3500
  },
  latte: {
    nombre: "Latte",
    emoji: "🤍",
    descripcion: "Leche cremosa con café",
    agua: 45,
    cafe: 20,
    leche: 160,
    chocolate: 0,
    precio: 4000
  },
  mocaccino: {
    nombre: "Mocaccino",
    emoji: "🍫",
    descripcion: "Café, leche y chocolate",
    agua: 40,
    cafe: 15,
    leche: 120,
    chocolate: 30,
    precio: 4600
  },
  chocolate: {
    nombre: "Chocolate",
    emoji: "🍵",
    descripcion: "Bebida cremosa de chocolate",
    agua: 100,
    cafe: 0,
    leche: 120,
    chocolate: 40,
    precio: 3500
  }
};

const denominaciones = [100, 200, 500, 1000, 2000, 5000, 10000, 20000];
const gramosPorCucharada = 10;

const nombresInsumos = {
  cafe: "Café",
  agua: "Agua",
  leche: "Leche",
  chocolate: "Chocolate",
  azucar: "Azúcar",
  vasos: "Vasos"
};

const unidadesInsumos = {
  cafe: "g",
  agua: "ml",
  leche: "ml",
  chocolate: "g",
  azucar: "g",
  vasos: "unidades"
};

const limitesStockBajo = {
  cafe: 10,
  agua: 25,
  leche: 100,
  chocolate: 30,
  azucar: 10,
  vasos: 1
};


// 2. VARIABLES DE LA MÁQUINA //

let stock = { ...stockInicial };
let caja = { ...dineroInicial };

let ventas = {
  espresso: 0,
  americano: 0,
  cappuccino: 0,
  latte: 0,
  mocaccino: 0,
  chocolate: 0
};

let dineroRecaudado = 0;
let seleccion = null;
let pago = [];


// 3. FUNCIONES AUXILIARES //

// Atajo para encontrar elementos HTML por su ID.
function obtenerElemento(id) {
  return document.getElementById(id);
}

// Convierte un número al formato de pesos colombianos.
function formatoDinero(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

// Calcula cuánto dinero se ha ingresado.
function totalPagado() {
  return pago.reduce((total, billete) => total + billete, 0);
}

// Calcula el valor total del dinero que hay en la caja.
function dineroEnCaja() {
  return denominaciones.reduce(
    (total, valor) => total + valor * (caja[valor] || 0),
    0
  );
}


// 4. MOSTRAR EL MENÚ Y LOS MEDIOS DE PAGO //

function renderMenu() {
  const menu = obtenerElemento("productGrid");

  menu.innerHTML = Object.entries(recetas)
    .map(([clave, receta]) => `
      <button
        class="product-card ${seleccion === clave ? "selected" : ""}"
        data-product="${clave}"
      >
        <span class="product-emoji">${receta.emoji}</span>
        <span class="product-name">${receta.nombre}</span>
        <span class="product-desc">${receta.descripcion}</span>
        <span class="product-price">${formatoDinero(receta.precio)}</span>
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-product]").forEach((boton) => {
    boton.addEventListener("click", () => {
      seleccion = boton.dataset.product;
      renderMenu();
      renderPedido();
    });
  });
}

function renderCashButtons() {
  const botonesDinero = obtenerElemento("cashButtons");

  botonesDinero.innerHTML = denominaciones
    .map((valor) => `
      <button type="button" data-cash="${valor}">
        ${formatoDinero(valor)}
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-cash]").forEach((boton) => {
    boton.addEventListener("click", () => {
      pago.push(Number(boton.dataset.cash));
      renderPedido();
    });
  });
}


// 5. ACTUALIZAR EL PEDIDO EN PANTALLA //

function renderPedido() {
  const productoSeleccionado = seleccion ? recetas[seleccion] : null;
  const contenedorProducto = obtenerElemento("selectedProduct");
  const cantidadAzucar = Number(obtenerElemento("sugar").value);
  const total = productoSeleccionado ? productoSeleccionado.precio : 0;
  const pagado = totalPagado();

  // Mostrar el producto elegido o el mensaje inicial.
  contenedorProducto.classList.toggle("empty", !productoSeleccionado);

  if (productoSeleccionado) {
    contenedorProducto.innerHTML = `
      <span class="cup-icon">${productoSeleccionado.emoji}</span>
      <div>
        <strong>${productoSeleccionado.nombre}</strong>
        <p>${productoSeleccionado.descripcion}</p>
      </div>
    `;
  } else {
    contenedorProducto.innerHTML = `
      <span class="cup-icon">☕</span>
      <p>Selecciona una bebida del menú.</p>
    `;
  }

  // Actualizar la cantidad de azúcar y los valores del pago.
  obtenerElemento("sugarValue").textContent =
    `${cantidadAzucar} ${cantidadAzucar === 1 ? "cucharada" : "cucharadas"}`;

  obtenerElemento("priceTotal").textContent = formatoDinero(total);
  obtenerElemento("paidTotal").textContent = formatoDinero(pagado);
  obtenerElemento("remainingTotal").textContent =
    formatoDinero(Math.max(0, total - pagado));

  obtenerElemento("paymentList").textContent = pago.length
    ? `Agregado: ${pago.map(formatoDinero).join(" + ")}`
    : "Aún no has agregado dinero.";

  obtenerElemento("buyButton").disabled =
    !productoSeleccionado || pagado < total;
}


// 6. REVISAR LOS INSUMOS DISPONIBLES //

function faltantes(receta, cantidadAzucar) {
  const insumosNecesarios = {
    cafe: receta.cafe,
    agua: receta.agua,
    leche: receta.leche,
    chocolate: receta.chocolate,
    azucar: cantidadAzucar * gramosPorCucharada,
    vasos: 1
  };

  return Object.entries(insumosNecesarios)
    .filter(([insumo, cantidad]) => stock[insumo] < cantidad)
    .map(([insumo]) => nombresInsumos[insumo].toLowerCase());
}


// 7. CALCULAR EL CAMBIO //

// Busca una combinación exacta de billetes y monedas disponibles.
function calcularVuelto(monto, disponibilidad) {
  const valores = [20000, 10000, 5000, 2000, 1000, 500, 200, 100];
  const combinaciones = Array(monto + 1).fill(null);

  combinaciones[0] = [];

  for (const valor of valores) {
    const cantidadDisponible = disponibilidad[valor] || 0;

    for (let i = 0; i < cantidadDisponible; i++) {
      for (let suma = monto; suma >= valor; suma--) {
        const combinacionAnterior = combinaciones[suma - valor];

        if (
          combinacionAnterior !== null &&
          (
            combinaciones[suma] === null ||
            combinacionAnterior.length + 1 < combinaciones[suma].length
          )
        ) {
          combinaciones[suma] = [...combinacionAnterior, valor];
        }
      }
    }
  }

  return combinaciones[monto];
}


// 8. PROCESAR LA COMPRA //

function comprar() {
  // Comprobar que se haya elegido una bebida.
  if (!seleccion) {
    return;
  }

  const receta = recetas[seleccion];
  const cantidadAzucar = Number(obtenerElemento("sugar").value);
  const pagado = totalPagado();
  const insumosFaltantes = faltantes(receta, cantidadAzucar);

  // Comprobar que haya suficientes ingredientes.
  if (insumosFaltantes.length > 0) {
    mostrarMensaje(
      `No hay suficiente ${insumosFaltantes.join(", ")}. No se realizó el cobro.`,
      false
    );
    return;
  }

  // Comprobar que el pago cubra el precio.
  if (pagado < receta.precio) {
    mostrarMensaje(`Te faltan ${formatoDinero(receta.precio - pagado)}.`, false);
    return;
  }

  // Calcular el cambio sin modificar todavía la caja real.
  const cajaTemporal = { ...caja };

  pago.forEach((billete) => {
    cajaTemporal[billete]++;
  });

  const valorVuelto = pagado - receta.precio;
  const cambio = valorVuelto
    ? calcularVuelto(valorVuelto, cajaTemporal)
    : [];

  // Cancelar si no existe una combinación exacta para devolver.
  if (cambio === null) {
    mostrarMensaje(
      `La máquina no tiene cambio exacto para ${formatoDinero(valorVuelto)}. Se canceló la compra.`,
      false
    );
    return;
  }

  // Actualizar el dinero de la caja.
  pago.forEach((billete) => {
    cajaTemporal[billete]--;
  });

  cambio.forEach((billete) => {
    cajaTemporal[billete]--;
  });

  caja = cajaTemporal;

  // Descontar los ingredientes utilizados.
  stock.cafe -= receta.cafe;
  stock.agua -= receta.agua;
  stock.leche -= receta.leche;
  stock.chocolate -= receta.chocolate;
  stock.azucar -= cantidadAzucar * gramosPorCucharada;
  stock.vasos--;

  // Registrar la venta.
  ventas[seleccion]++;
  dineroRecaudado += receta.precio;

  // Preparar el mensaje de confirmación.
  const insumosBajos = Object.entries(stock)
    .filter(([insumo, cantidad]) => cantidad <= limitesStockBajo[insumo])
    .map(([insumo]) => nombresInsumos[insumo].toLowerCase());

  let mensaje = `¡Tu ${receta.nombre} está listo! Cobro: ${formatoDinero(receta.precio)}. `;

  if (valorVuelto > 0) {
    mensaje += `Tu cambio es ${formatoDinero(valorVuelto)} (${cambio.map(formatoDinero).join(", ")}).`;
  } else {
    mensaje += "Pago exacto. ¡Gracias!";
  }

  if (insumosBajos.length > 0) {
    mensaje += ` Atención: nivel bajo de ${insumosBajos.join(", ")}.`;
  }

  mostrarMensaje(mensaje, true);

  // Limpiar el pago y actualizar las pantallas.
  pago = [];
  renderPedido();
  renderAdmin();
}


// 9. MENSAJES Y CANCELACIÓN //

function mostrarMensaje(texto, correcto) {
  const mensaje = obtenerElemento("message");

  mensaje.textContent = texto;
  mensaje.className = `message ${correcto ? "success" : "error"}`;
}

function cancelar() {
  pago = [];

  const mensaje = obtenerElemento("message");
  mensaje.textContent = "";
  mensaje.className = "message";

  renderPedido();
}


// 10. PANEL DE ADMINISTRACIÓN //

function renderAdmin() {
  const stockGrid = obtenerElemento("stockGrid");

  // Mostrar el inventario actual.
  stockGrid.innerHTML = Object.entries(stock)
    .map(([insumo, cantidad]) => `
      <div class="stock-item ${cantidad <= limitesStockBajo[insumo] ? "low" : ""}">
        <span>${nombresInsumos[insumo]}</span>
        <strong>${cantidad.toLocaleString("es-CO")} ${unidadesInsumos[insumo]}</strong>
      </div>
    `)
    .join("");

  // Mostrar el reporte de ventas.
  const totalBebidas = Object.values(ventas).reduce(
    (total, cantidad) => total + cantidad,
    0
  );

  const reporteVentas = Object.entries(ventas)
    .map(([clave, cantidad]) => `${recetas[clave].nombre}: ${cantidad}`)
    .join("\n");

  obtenerElemento("salesReport").textContent =
    `${reporteVentas}\n` +
    `Total de bebidas: ${totalBebidas}\n` +
    `Dinero recaudado: ${formatoDinero(dineroRecaudado)}`;

  obtenerElemento("cashInMachine").textContent =
    formatoDinero(dineroEnCaja());
}


// 11. CONFIGURAR LOS EVENTOS DE LOS BOTONES //

function configurarEventos() {
  obtenerElemento("sugar").addEventListener("input", renderPedido);
  obtenerElemento("buyButton").addEventListener("click", comprar);
  obtenerElemento("clearButton").addEventListener("click", cancelar);

  obtenerElemento("toggleAdmin").addEventListener("click", () => {
    const panelAdmin = obtenerElemento("adminDetails");

    panelAdmin.hidden = !panelAdmin.hidden;
    obtenerElemento("toggleAdmin").textContent = panelAdmin.hidden
      ? "Mostrar detalles"
      : "Ocultar detalles";
  });

  obtenerElemento("restockButton").addEventListener("click", () => {
    stock = { ...stockInicial };
    renderAdmin();
    mostrarMensaje("Insumos repuestos correctamente.", true);
  });

  obtenerElemento("resetSalesButton").addEventListener("click", () => {
    ventas = {
      espresso: 0,
      americano: 0,
      cappuccino: 0,
      latte: 0,
      mocaccino: 0,
      chocolate: 0
    };

    dineroRecaudado = 0;
    renderAdmin();
  });
}


// 12. INICIAR LA MÁQUINA //

function iniciarMaquina() {
  configurarEventos();
  renderMenu();
  renderCashButtons();
  renderPedido();
  renderAdmin();
}

iniciarMaquina();
