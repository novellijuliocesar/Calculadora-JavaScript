
let valorPrevio = "";
let valorNuevo = "";
let resultado = "";
let operador = "";
let decimal = false;
let valorMemoria = "";


function numeroPresionado(boton) {
    display = document.querySelector(".entrada");
    if(resultado){
        valorNuevo = boton;
        resultado = "";
    }else{
        if(boton === "."){
            if(decimal != true){
                valorNuevo += boton;
                decimal = true;
            }
        }else{
            valorNuevo +=boton;
        }
    }
    display.value = valorNuevo;
}

//Recoge el operador a calcular.
function operadorPresionado(boton) {
    display = document.querySelector(".entrada");
    if(!resultado){
        valorPrevio = valorNuevo;
    }else{
        valorPrevio = resultado;
    }
    operador = boton;
    valorNuevo = "";
    resultado = "";
    decimal = "";
    display.value = "";
}

//Devuelve el resultado de la operación.
function botonIgual() {
    valorNuevo = parseFloat(valorNuevo);
    valorPrevio = parseFloat(valorPrevio);
    if(valorPrevio && valorNuevo && operador){
        switch (operador) {
            case "+":
                resultado = valorPrevio + valorNuevo;
                break;
            case "-":
                resultado = valorPrevio - valorNuevo;
                break;
            case "*":
                resultado = valorPrevio * valorNuevo;
                break;
            case "/":
                resultado = valorPrevio / valorNuevo;
                break;
        }
    }    
    valorPrevio = resultado;
    document.querySelector(".entrada").value = resultado;
}

//Copia el valor numérico del display.
function botonMemoria() {
    valorMemoria = parseFloat(document.querySelector(".entrada").value);
    console.log(valorMemoria);
}

//Pega el valor numérico en memoria.
function botonPegar() {
    if (valorMemoria) {
        document.querySelector(".entrada").value = valorMemoria;
        valorNuevo = valorMemoria;
    }
}

//Limpia todos los valores almacenados y pone a 0 el display.
function botonLimpiar() {
    valorPrevio = '';
    valorNuevo = '';
    resultado = '';
    operador = '';
    decimal = false;
    document.querySelector(".entrada").value = 0;
}