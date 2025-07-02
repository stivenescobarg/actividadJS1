let texto = prompt("Escribe un texto:");


const SALUDO = "¡Tu texto es: ";
var textoCompleto = SALUDO + texto;

let esLargo = texto.length;
console.log(esLargo);

var valorNulo = null; 

let negacion = !esLargo;

console.log("Texto completo:", textoCompleto);
console.log("¿Es largo (más de 10 caracteres)?", esLargo);

if (esLargo<10) {    
    console.log("FALSE"); 
}else {
    console.log("TRUE");
}

console.log("Negación (no es largo):", negacion);
console.log("Valor nulo:", valorNulo);