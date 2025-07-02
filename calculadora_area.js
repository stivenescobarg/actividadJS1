let anchoStr = prompt ("¿Cual es el ancho del rectángulo?");
var ancho = parseFloat(anchoStr);

let altoStr = prompt("¿Cuál es el alto del rectángulo?");
let alto = parseFloat(altoStr);



const AREA_REFERENCIA = 50;
var area = ancho * alto;

let esMayor50 = area > AREA_REFERENCIA;
var valorNoDefinido; 


console.log("Área del rectángulo:", area);
console.log("¿Es mayor a 50?", esMayor50);
console.log("Valor no definido:", valorNoDefinido);