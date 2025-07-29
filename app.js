let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) //Usar parseInt para convertir un dato de String a number.
    //console.log(typeof(numeroDeUsuario)); //verifica el tipo de dato si es 'String' o 'number'
    //console.log(typeof(numeroSecreto));   //verifica el tipo de dato si es 'String' o 'number'
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario === numeroSecreto); //El === compara estrictamente que sean el mismo tipo de datos.
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }!`); //operador ternario para plural o singular
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acepto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya se mostraron todos los numeros posibles, el juego se cierra
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numero posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros, Generar el numero aleatorio y rese numero de intentos.
    condicionesIniciales();
    // //Deshabilitar el boton de "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();