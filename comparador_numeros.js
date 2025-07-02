var numero1Str = prompt("Ingrese el primer numero: ");
let numero1 = parseFloat(numero1Str);

var numero2Str = prompt("Ingrese el segundo numero: ");
let numero2 = parseFloat(numero2Str);

var suma = numero1 + numero2;
let resta = numero1 - numero2;

const SONIGUALES = numero1 === numero2;

var combinacionLogica = SONIGUALES || false;

console.log ("la suma es: ", suma);
console.log ("La diferencia es: ", resta);
console.log ("son iguales? ", SONIGUALES);
console.log ("Son el mismo tipo y numero?", combinacionLogica);