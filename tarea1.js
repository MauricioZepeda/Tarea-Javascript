// Ejercicio 1
function esPar(numero){
    var resto = numero % 2; 
    return resto === 0 ? "Es par" : "No es par";
}
console.log(esPar(7));

// Ejercicio 2
function posicion(caracter){
    var cadena = "abcdefghijklmnñopqrstuvwxyz"; 
    return cadena.indexOf(caracter);
}
console.log(posicion('e'));

// Ejercicio 3
function agregarImpuesto(valor){
    var impuesto = 0.19;
    var valorImpuesto = valor * impuesto;
    var valorFinal = valor + valorImpuesto; 
    return "El precio con impuesto es de " + valorFinal; 
}
console.log(agregarImpuesto(1000));

// Ejercicio 4
function nuevoDado(nombre){
    var nombreMayuscula = nombre.charAt(0).toUpperCase() + nombre.substr(1).toLowerCase(); 
    return function(){
        var valorRandom = Math.floor((Math.random() * 6) + 1);
        return nombreMayuscula + " tiró un dado y salió " + valorRandom;
    }
} 
var dadoJulio = nuevoDado('julio'); 
console.log(dadoJulio());
console.log(dadoJulio());
console.log(dadoJulio());