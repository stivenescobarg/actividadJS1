let horasSct = prompt("¿Cuántas horas deseas convertir?");
let horas = parseFloat(horasSct);

const MINUTOS_EN_HORA = 60;
const SEGUNDOS_EN_MINUTO = 60;
let minutos = horas * MINUTOS_EN_HORA;
var segundos = minutos * SEGUNDOS_EN_MINUTO;

let esMayorA1 = horas > 1;

console.log("Minutos:", minutos);
console.log("Segundos:", segundos);
console.log("¿Es mayor a 1 hora?", esMayorA1);