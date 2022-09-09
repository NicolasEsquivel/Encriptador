const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");



function btnEncriptar(){
    const sinAcentos = getCleanedString(inputTexto.value);
	sinAncentos1 = sinAcentos;

	const textoEncriptado = encriptar(sinAncentos1);
	mensaje.value = textoEncriptado;

    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function getCleanedString(cadena){

    // Defino los caracteres que queremos eliminar

    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

   // Los elimino todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Todo en minúscula
    cadena = cadena.toLowerCase();

    // Quito tildes
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    return cadena;
 }

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("¡Su texto fue copiado con éxito!");
}