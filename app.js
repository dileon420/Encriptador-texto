function encriptar() {

    let textoAEncriptar = document.getElementById('textoAEncriptar').value;

    // Validar que el texto solo contenga caracteres en minúscula y sin acentos ni caracteres especiales
    let regex = /^[a-z\s]+$/;
    if (!regex.test(textoAEncriptar)) {
        alert('Solo se permiten letras minúsculas, sin acentos, sin caracteres especiales y que no esté vacío');
        return;
    } else {

        let textoEncriptado = document.getElementById('textoEncriptado');
        textoEncriptado.style.display = "block";

        let botonCopiar = document.getElementById('botonCopiar');
        botonCopiar.style.display = "block";

        let parrafoPrimero = document.getElementById('parrafoPrimero');
        parrafoPrimero.style.visibility = "hidden";

        let parrafoSegundo = document.getElementById('parrafoSegundo');
        parrafoSegundo.style.visibility = "hidden";

        document.getElementById('botonDesencriptar').removeAttribute('disabled');

        textoEncriptado = '';
        // Recorrer cada caracter de la cadena
        for (var i = 0; i < textoAEncriptar.length; i++) {
            var caracter = textoAEncriptar[i];
            switch (caracter) {
                case 'e':
                    textoEncriptado += 'enter';
                    break;
                case 'i':
                    textoEncriptado += 'imes';
                    break;
                case 'a':
                    textoEncriptado += 'ai';
                    break;
                case 'o':
                    textoEncriptado += 'ober';
                    break;
                case 'u':
                    textoEncriptado += 'ufat';
                    break;
                default:
                    textoEncriptado += caracter;
            }
        }

        document.getElementById('textoEncriptado').value = textoEncriptado;

        document.querySelector('#botonEncriptar').setAttribute('disabled', 'true');

        document.getElementById('botonEncriptar').style.backgroundColor = '#D8DFE8';

        document.getElementById('botonDesencriptar').style.backgroundColor = 'darkblue';

        document.getElementById('botonEncriptar').style.color = 'darkblue';

        document.getElementById('botonDesencriptar').style.color = 'white';

        //limpiar input
        document.querySelector('#textoAEncriptar').value = '';
    }
}

function desencriptar() {
    let textoEncriptado = document.getElementById('textoAEncriptar').value;

    // Validar que el texto solo contenga caracteres en minúscula y sin acentos ni caracteres especiales
    let regex = /^[a-z\s]+$/;
    if (!regex.test(textoEncriptado)) {
        alert('Solo se permiten letras minúsculas, sin acentos, sin caracteres especiales y que no esté vacío');
        return;
    } else {
        let textoDesencriptado = '';

        for (var i = 0; i < textoEncriptado.length; i++) {
            if (textoEncriptado.substr(i, 5) === 'enter') {
                textoDesencriptado += 'e';
                i += 4;
            } else if (textoEncriptado.substr(i, 4) === 'imes') {
                textoDesencriptado += 'i';
                i += 3;
            } else if (textoEncriptado.substr(i, 2) === 'ai') {
                textoDesencriptado += 'a';
                i += 1;
            } else if (textoEncriptado.substr(i, 4) === 'ober') {
                textoDesencriptado += 'o';
                i += 3;
            } else if (textoEncriptado.substr(i, 4) === 'ufat') {
                textoDesencriptado += 'u';
                i += 3;
            } else {
                textoDesencriptado += textoEncriptado[i];
            }
        }

        document.getElementById('textoEncriptado').value = textoDesencriptado;

        document.getElementById('botonEncriptar').removeAttribute('disabled');

        document.querySelector('#botonDesencriptar').setAttribute('disabled', 'true');

        //cambiar color de botones
        document.getElementById('botonEncriptar').style.backgroundColor = 'darkblue';

        document.getElementById('botonDesencriptar').style.backgroundColor = '#D8DFE8';

        document.getElementById('botonDesencriptar').style.color = 'darkblue';

        document.getElementById('botonEncriptar').style.color = 'white';

        //limpiar input
        document.querySelector('#textoAEncriptar').value = '';
    }
}

function copiar() {
    // Obtener el elemento textarea
    const textarea = document.getElementById('textoEncriptado');
    // Obtener el contenido del textarea
    const texto = textarea.value;

    // Utilizar la API del Portapapeles para copiar el contenido
    navigator.clipboard.writeText(texto).then(() => {
        // Mostrar un mensaje de éxito o hacer algo después de copiar
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        // Mostrar un mensaje de error si no se pudo copiar
        console.error('Error al copiar el texto: ', err);
    });
}