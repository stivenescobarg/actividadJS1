var pesoStr = prompt("¿Cúal es tu peso?");
let peso = parseFloat(pesoStr);

const PESO_REFERENCIA = 70;
let gramos = peso * 1000;


var esMayor70kg = peso > PESO_REFERENCIA;


let resultadoCombinacion = esMayor70kg && true;


console.log("Peso en gramos:", gramos);
console.log("¿Es mayor a 70 kg?", esMayor70kg);
console.log("Resultado combinado (mayor a 70 && true):", resultadoCombinacion);