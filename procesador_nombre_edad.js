
var nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));


const DIAS_POR_ANO = 365;


let edadEnDias = edad * DIAS_POR_ANO;

let esCorto = nombre.length;

let meses = null;

console.log("Nombre:", nombre);
console.log("Edad en días:", edadEnDias);
console.log("¿El nombre es corto (menos de 5 caracteres)?", esCorto);

if (esCorto<5) {    
    console.log("TRUE"); 
}else {
    console.log("FALSE");
}
console.log("Valor nulo:", meses);
