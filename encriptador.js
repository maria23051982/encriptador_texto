function encriptar() {

    var frase= document.getElementById("Texto a encriptar").value.toLowerCase()

    var textoencriptado = frase.replace(/e/img, "enter");
    var textoencriptado = textoencriptado.replace(/o/img, "ober");
    var textoencriptado = textoencriptado.replace(/i/img, "imes");
    var textoencriptado = textoencriptado.replace(/a/img, "ai");
    var textoencriptado = textoencriptado.replace(/u/img, "ufat");

    //document.getElementById("imagedere").style.display= none;
    //document.getElementById("texto1").style.display = none;
    document.getElementById("texto2").innerHTML = textoencriptado;
}
function desencriptar() {

    
    var frase= document.getElementById("Texto a encriptar").value.toLowerCase()

    var textoencriptado = frase.replace(/enter/img, "e");
    var textoencriptado = textoencriptado.replace(/ober/img, "o");
    var textoencriptado = textoencriptado.replace(/imes/img, "i");
    var textoencriptado = textoencriptado.replace(/ai/img, "a");
    var textoencriptado = textoencriptado.replace(/ufat/img, "u");

    document.getElementById("texto2").innerHTML = textoencriptado;

}

function copiar() {

    var frases = document.querySelector("#Texto2");
    frases.select();
    document.execCommand("copy");
}