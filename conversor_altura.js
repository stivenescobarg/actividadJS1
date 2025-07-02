
let altura = parseFloat(prompt("¿Cuál es tu altura en metros?"));
 
const ALTURA_REFERENCIA = 1.5;

var milimetros = altura * 100 * 10;  
let centimetros = altura * 100;     

let esAlta = altura > ALTURA_REFERENCIA;
let valorNoAsignado;  


console.log("Altura en centímetros:", centimetros);
console.log("Altura en milímetros:", milimetros);
console.log("¿Es alta (más de 1.5 metros)?", esAlta);
console.log("Valor no asignado:", valorNoAsignado);