
var precioStr = prompt("Ingresa el precio del producto:");
let precio = parseFloat(precioStr);

const DESCUENTO = 0.10;

let precioConDescuento = precio - (precio * DESCUENTO);

var esMayorA100000 = precio > 100000;
let negacion = !esMayorA100000;

let sinAsignar;


console.log("Precio con descuento:", precioConDescuento);
console.log("¿Es mayor a 100000?:", esMayorA100000);
console.log("Negación:", negacion);
console.log("Valor sin asignar:", sinAsignar);
