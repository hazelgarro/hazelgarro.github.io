//document.getElementById("element").style.display = "block"; Para mostrar lo oculto cada que se usa el boton
//document.getElementById("element").style.display = "none"; para ocultar\


var textoUsuario = "";
var textoEncriptado = "";
var textoDesencriptado = "";

var boton = document.querySelector("btn-encriptar");

    function ocultarMensajeInstruccion(){
        document.getElementById('mensaje-encriptado').style.display = 'none';
    }

    function ocultarMensajeEncriptado(){
        document.getElementById('mensaje-encriptado').style.display = 'none';
    }

    function mostrarMensajeInstruccion(){
        document.getElementById('mensaje-encriptado').style.display = "block";
    }

    function mostrarMensajeEncriptado(){
        document.getElementById('mensaje-encriptado').style.display = "block";
    }

    function encriptar(){

        textoUsuario = document.getElementById("texto-usuario").value;
        
        var textoModificado = "";

            textoModificado = textoUsuario.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
            
            // if(textoUsuario.includes('u')){
            //     //textoModificado = textoUsuario.replaceAll('u','ufat');
            //     textoModificado = textoUsuario.replace(/u/g,'ufat');
            // } 

        textoEncriptado = textoModificado;

        mostrarEncriptado(textoEncriptado);
        mostrarMensajeEncriptado();

        console.log(textoEncriptado.valueOf());

    }

    function mostrarEncriptado(textoEncriptado){
        document.getElementById('texto-encriptado').innerHTML=textoEncriptado;
    }

    function desencriptar(){

        textoEncriptado = document.getElementById("texto-usuario").value;

        var textoModificado = "";

        textoModificado = textoEncriptado.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');

        textoDesencriptado = textoModificado;
        mostrarDesencriptado(textoDesencriptado);
        mostrarMensajeEncriptado();
    }

    function mostrarDesencriptado(textoDesencriptado){
        document.getElementById('texto-encriptado').innerHTML=textoDesencriptado;
    }

    function copiar() {
        var content = document.getElementById('texto-encriptado');
        content.select();
        document.execCommand('copy');
    }
    


