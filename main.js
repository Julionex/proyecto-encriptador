
let textoPrueba = "el gato es gruñon";
//enterl gaitober enters grufatñobern
let LlaveEntrada = ['a','e','i','o','u'];
let LlaveSalida = ['ai','enter','imes','ober','ufat'];

console.log (textoPrueba.length);
console.log (textoPrueba[0]);


function inicializador() {
    let listaDeTexto = separadorDeTexto(textoPrueba);
    let textoFinal = unificadorDeTexto(listaDeTexto);
    console.log (textoFinal);
    desencriptar(textoFinal);
}
// Aqui separaremos el texto ingresado y lo agregaremos a una lista
function separadorDeTexto(texto) {
    let listaDeTexto = [];
    for (let contador = 0; contador < texto.length ; contador++ ){
        console.log(texto.length);
        listaDeTexto.push(logicaLlaves(texto[contador]));
    }
    console.log(listaDeTexto);
    return listaDeTexto;
}

// verificamos si el caracter enviado es una vocal, y retornamos el equivalente de la llave
function logicaLlaves(caracter) {
    if (LlaveEntrada.includes(caracter)){
        if (caracter=='a'){
            return 'ai';
        }
        if (caracter == 'e'){
            return 'enter';
        }
        if (caracter == 'i'){
            return 'imes';
        }
        if (caracter == 'o'){
            return 'ober';
        }
        if (caracter == 'u'){
            return 'ufat';
        }
    } else {
        return caracter;
    }

}

// /*une el texto de la lista y devuelve un string */
// function unificadorDeTexto(listaDeTexto) {
//     let textoUnificado = '';
//     for (let contador = 0; contador < listaDeTexto.length; contador ++){
//         textoUnificado = textoUnificado + listaDeTexto [contador];
//     }
//     return textoUnificado;
// }


function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muñeco");
    
    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con Exito";
        parrafo.textContent = "";
        muneco.src = "./img/encriptado.jpg";
    } else {
        muneco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}

function desencriptar() {
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muñeco");
    let texto = document.getElementById("texto").value;
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con Exito";
        parrafo.textContent = "";
        muneco.src = "./img/desencriptado.jpg";
    } else {
        muneco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
    
        
    console.log (texto);
}


inicializador();



