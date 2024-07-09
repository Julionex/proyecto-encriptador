
let textoPrueba = "el gato es gruñon";
let LlaveEntrada = ['a','e','i','o','u'];
let LlaveSalida = ['ai','enter','imes','ober','ufat'];

console.log (textoPrueba.length);
console.log (textoPrueba[0]);


function inicializador() {
    let listaDeTexto = separadorDeTexto(textoPrueba);
    let textoFinal = unificadorDeTexto(listaDeTexto);
    console.log (textoFinal);
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

/*une el texto de la lista y devuelve un string */
function unificadorDeTexto(listaDeTexto) {
    let textoUnificado = '';
    for (let contador = 0; contador < listaDeTexto.length; contador ++){
        textoUnificado = textoUnificado + listaDeTexto [contador];
    }
    return textoUnificado;
}

inicializador();