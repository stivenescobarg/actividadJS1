let nombre = prompt("Ingresa tu nombre:");

    var entradaEdad = prompt("Ingresa tu edad:");
    let edad = parseInt(entradaEdad);

        let entradaPeso = prompt("Ingresa tu peso en kg:");
        let peso = parseFloat(entradaPeso);

const MESES_EN_UN_ANIO = 12;
let edadEnMeses = edad * MESES_EN_UN_ANIO;

var pesoGramos = peso * 1000;

let nombreVacio = nombre === "";
let edadEsPar = edad % 2 === 0;
let combinacionLogica = nombreVacio || edadEsPar;

console.log("Nombre:", nombre);
console.log("Edad en meses:", edadEnMeses);
console.log("Peso en gramos:", pesoGramos);
console.log("¿Nombre vacío?:", nombreVacio);
console.log("¿Edad es par?:", edadEsPar);
console.log("Resultado de la combinación lógica:", combinacionLogica);
