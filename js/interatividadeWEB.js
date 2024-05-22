//titulo = document.querySelector(".container");
//titulo.textContent = "Nutri Mais";

var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes);

for (var i=0; i<pacientes.length;i++){
     var paciente = pacientes[i];

     var peso = paciente.querySelector(".info-peso");
     peso = peso.textContent

     var altura = paciente.querySelector(".info-altura");
    altura = altura.textContent


if (peso<0 || peso>=100){
    var imc = paciente.querySelector(".info-imc");
    imc.textContent = "peso inválido"           
}
 else if (altura<0 || altura >3){
    var imc = paciente.querySelector(".info-imc");
    imc.textContent = "altura inválida" 
 }
else{
    var imc = paciente.querySelector(".info-imc");
    imc.textContent = (peso/(altura*altura)).toFixed(2);
}

    
}

/*
var paciente = document.querySelector("#p1");
var peso = paciente.querySelector(".info-peso");
peso = peso.textContent
var altura = paciente.querySelector(".info-altura");
altura = altura.textContent
var imc = paciente.querySelector(".info-imc");

imc.textContent = (peso/(altura*altura)).toFixed(2);

var paciente = document.querySelector("#p2");
var peso = paciente.querySelector(".info-peso");
peso = peso.textContent
var altura = paciente.querySelector(".info-altura");
altura = altura.textContent
var imc = paciente.querySelector(".info-imc");

imc.textContent = (peso/(altura*altura)).toFixed(2);

var paciente = document.querySelector("#p3");
var peso = paciente.querySelector(".info-peso");
peso = peso.textContent
var altura = paciente.querySelector(".info-altura");
altura = altura.textContent
var imc = paciente.querySelector(".info-imc");

imc.textContent = (peso/(altura*altura)).toFixed(2);

var paciente = document.querySelector("#p4");
var peso = paciente.querySelector(".info-peso");
peso = peso.textContent
var altura = paciente.querySelector(".info-altura");
altura = altura.textContent
var imc = paciente.querySelector(".info-imc");

imc.textContent = (peso/(altura*altura)).toFixed(2);

var paciente = document.querySelector("#p5");
var peso = paciente.querySelector(".info-peso");
peso = peso.textContent
var altura = paciente.querySelector(".info-altura");
altura = altura.textContent
var imc = paciente.querySelector(".info-imc");

imc.textContent = (peso/(altura*altura)).toFixed(2);
*/
