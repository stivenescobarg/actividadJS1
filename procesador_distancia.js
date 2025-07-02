let distanciaStr = prompt("Ingrese una distancia en Km: ");
let distanciaKm = parseFloat(distanciaStr);

const KM_A_METROS = 1000;
const METROS_A_CENTIMETROS = 100;

let metros = distanciaKm * KM_A_METROS;
let centimetros = metros * METROS_A_CENTIMETROS;

var esMenorAUnKm = distanciaKm < 1;
var valorNulo = null;

console.log("Metros:", metros);
console.log("Centímetros:", centimetros);
console.log("¿Es menor a 1 km?:", esMenorAUnKm);
console.log("Valor nulo:", valorNulo);
