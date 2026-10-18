Variables:
- Cantidad de agua //Mililitros//
- Cantidad de cafe //Gramos//
- Cantidad de leche //Mililitros//
- Cantidad de chocolate //Gramos//
- Cantidad de azucar //Gramos//
- Cantidad de vasos //Unidad//
- Saldo ingresado por el usuario //Pesos colombianos-Moneda y billete//
- Temperatura de agua //Celcius//

Productos:
- Cafe Expresso
- Cafe Americano
- Cappucchino
- Cafe Latte
- Mocaccino
- Chocolate caliente


//Pseudocodigo de la maquina//

Maquina de cafe
Inicio
Reglas de negocio (MÁQUINA):
El saldo empieza en cero.
Inventario: 
- 1000 gramos de café
- 2500 mililitros de leche
- 5000 mililitros de agua 
- 1500 gramos de chocolate
- 1500 gramos de azucar
- 100 vasos

Precios: 
- Espresso 2000 
- Americano 2800
- Cappuccino 3500
- Latte 4000
- Mocaccino 4600
- Chocolate 3500

Recetas:
Espresso: 
- agua 75 ml
- cafe 15 g

americano: 
- agua: 100 ml 
- cafe: 15 g 

cappuccino: 
- agua: 100 ml 
- cafe: 20 g 
- leche: 150 ml

latte: 
- agua: 100 ml
- cafe: 20 g 
- leche: 160 ml

mocaccino: 
- agua: 90 ml 
- cafe: 15 g 
- leche: 120 ml 
- chocolate: 30 g 

chocolate: 
- leche: 120 ml 
- chocolate: 40 g 

Entradas (la informacion que la persona le envía a la máquina):
insertarMoneda(Valor): 
SUMAR el valor al saldo.

Para seleccionar la bebida(nombre): 
Si el nombre no está en la lista de precios: Mostrar "La bebida no esta disponible." la maquina devuelve el dinero y termina el proceso. 
Si el saldo es menor que el precio de la bebida: Mostrar "Saldo insuficiente. Inserte más dinero o pida una devolución." la maquina termina el proceso, sin devolver el dinero todavía. 
Si no hay ingredientes para la bebida: Mostrar "Sin ingredientes." la maquina devuelve el dinero y termina el proceso. 
Preparar la bebida: Se resta el precio de la bebida al saldo. (Después de la resta, lo que queda en el saldo es el cambio.) Mostrar "Disfrute su (Nombre del producto)"
Si el saldo es mayor que cero: La maquina devuelve el cambio.

Pedir la devolucion: La maquina devuelve el dinero que quedó en el saldo.

Salidas (lo que la máquina muestra o entrega a la persona):
Mensajes que aparecen en la pantalla: "La bebida no esta disponible.", "Saldo insuficiente", "Sin ingredientes", "Preparando su bebida", "Disfrute su bebida", "Cambio:(Lo que queda de cambio )", "Devolución: (Dinero que sobra)". La bebida esta preparada preparada.
