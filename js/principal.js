
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var AlturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
} 
if (altura <= 0 || altura >= 3.00) {
    AlturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}

if (AlturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}