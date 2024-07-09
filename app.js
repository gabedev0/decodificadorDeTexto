
function criptografar() {
    let texto = document.getElementById("texto").value;
    let mensagemResultado = document.getElementById("mensagem__resultado")
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagemResultado = document.getElementById("resul");

    let textoCriptografado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto.length !== 0) {
        mensagemResultado.textContent = textoCriptografado;
        paragrafo.textContent = "";
        imagemResultado.style.display = "none";
        tituloMensagem.style.display = "none";
    } else {
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}

function Descriptografar() {
    let texto = document.getElementById("texto").value;
    let mensagemResultado = document.getElementById("mensagem__resultado")
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let imagemResultado = document.getElementById("resul");

    let textoDescriptografado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
    if (texto.length !== 0) {
        mensagemResultado.textContent = textoDescriptografado;
        paragrafo.textContent = "";
        imagemResultado.style.display = "none";
        tituloMensagem.style.display = "none";
    } else {
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}