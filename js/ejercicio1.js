//Bloque A: Consola y Variables (Sin HTML)
//Presentación Proactiva
let ciudad = "Madrid"; 
const pais = "España";

console.log("Vivo en " + ciudad + ", " + pais);



//Cálculo de IVA
let precio = 80; 
const IVA = 0.21;

console.log("El precio con IVA es: " + (precio * (1 + IVA)));


//Conversor de Años a Días
let edad = 70; 
const diasEnAnio = 365;

console.log("Has vivido aproximadamente "+ edad * diasEnAnio +  " días");

//Bloque B: Interactividad Simple (alert y prompt)
//El Saludo Personalizado
let nombre = prompt("¿Cuál es tu nombre?");
alert("¡Bienvenido al curso de JS, " + nombre );

//Suma Rápida
let num1 = parseInt(prompt("Introduce un número."));
let num2 = parseInt(prompt("Introduce otro número."));

alert("La suma de ambos números es: " + (num1 + num2));


//Bloque C: Lógica Básica (Booleanos)
//¿Eres Mayor de Edad?
edad = parseInt(prompt("Introduce tu edad."));
let miEdad = 18 <= edad;

if (miEdad) {
  alert("Eres mayor de edad.");
} else {
    alert("Eres menor de edad.");
}


//Verificador de Invitados
nombre = prompt("¿Cuál es tu nombre?");
let invitados = "Admin";
if (nombre == invitados){
    alert("Acceso total");
}else{
    alert("Acceso limitado");
}


//Números impares
num1 = parseInt(prompt("Introduce un número positivo."));
while (num1 <= 0 || isNaN(num1)) {
    alert("Por favor, introduce un número positivo.");
    num1 = parseInt(prompt("Introduce un número positivo."));
}
for (let i= 0; i<num1; i++){
    if (num1%2==0){
        console.log(i);
    }
}