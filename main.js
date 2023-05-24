//Encriptar texto:
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Se declaran variables constantes para hacer conección entre html y jS.
//Las variables constantes son inmutables.
//*variable* = document.getElementById('id');
//Se usa document.getElementById para conectar una ID hacia una etiqueta especifica del html.
//En este caso conectamos el input con una variable y un boton hacia una funcion de JS.
const inputTexto = document.getElementById('input1.1'); 
const btnEncriptar = document.getElementById('boton_1');
const btnDesencriptar = document.getElementById('boton_2');
const inputResultado = document.getElementById('input2.1');
const btnCopiar = document.getElementById('boton_3');
const soloLetras = '^[a-z A-Z ]+$';

//Dicho método .addEventListener('') permite asociar múltiples funciones a un mismo evento.
//El evento DOMContentLoaded es una palabra reservada que nos permite conocer el momento en el que todos los elementos del DOM, es decir, los elementos HTML de un proyecto, están cargados.
//

document.addEventListener('DOMContentLoaded', () => {
   btnEncriptar.addEventListener('click', encriptarTexto);
  btnDesencriptar.addEventListener('click', desencriptarTexto);
   btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;

    if (texto.match(soloLetras) != null) {
        let palabras = texto.split(' ');
        let nuevasPalabras = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('e', 'efe');
            palabra = palabra.replaceAll('i', 'ifi');
            palabra = palabra.replaceAll('a', 'afa');
            palabra = palabra.replaceAll('o', 'ofo');
            palabra = palabra.replaceAll('u', 'ufu');

            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');

        inputResultado.value = resultado;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }
}

function desencriptarTexto(e) {
    e.preventDefault();
    inputResultado.value = '';
    let texto = inputTexto.value;

    if (texto.match(soloLetras) != null) {
        let palabras = texto.split(" ");
        let nuevasPalabras = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('efe', 'e');
            palabra = palabra.replaceAll('ifi', 'i');
            palabra = palabra.replaceAll('afa', 'a');
            palabra = palabra.replaceAll('ofo', 'o');
            palabra = palabra.replaceAll('ufu', 'u');
            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');

        inputResultado.value = resultado;
    } else {
        mostrarError('Solo se permiten letras minúsculas, sin acentos');
        return;
    }
}

function mostrarError(mensaje) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const formulario = document.getElementById('formulario');
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');

        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

function copiarTexto(e) {
    e.preventDefault();
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}
