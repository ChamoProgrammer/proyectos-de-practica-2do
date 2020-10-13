//Generate a random number between 1 and 500--------
//Genera un número aleatorio entre 1 y 500
let numeroAleatorio = parseInt((Math.random() * 100) + 1);
// const enviar = document.querySelector('#subt');
const entradaUsuario = document.querySelector('#guessField');
const adivinaDispara = document.querySelector('.guesses');
const restanteDisparos = document.querySelector('.lastResult');
const comenzarDeNuevo = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let anteriorAdivina = [];
let adivinaNum = 1;
let jugarJuego = true;

if (jugarJuego){
    subt.addEventListener('click', (e) => {
        e.preventDefault();
        //Grab adivinar from user-----Agarra adivina del usuario
        const adivinar = parseInt(entradaUsuario.value);
        validarSiAdivina(adivinar);
    });
}

function validarSiAdivina(adivinar){
    if (isNaN(adivinar)){
        alert('porfavor ingrese un numero valido');
    } else if (adivinar < 1) {
        alert('¡Ingrese un número mayor que 1!');
    } else if (adivinar > 100){
        alert('Introduzca un número menor que 500.')
    } else {
        //Keep record of number of attempted guesses
        anteriorAdivina.push(adivinar);
        //Check to see if game is over
        if (adivinaNum === 11){
            mostrarConjenturas(adivinar);
            mensajeEnPantalla(`Game Over! el numero era ${numeroAleatorio} 🥱`);
            finJuego();
        } else {
        //Display previous guessed numbers
        mostrarConjenturas(adivinar);
        //Check adivinar and display if wrong
        compruebaAdivinar(adivinar);
        }
    }
}

function compruebaAdivinar(adivinar){
    //Display clue if adivinar is too high or too low
    if (adivinar === numeroAleatorio){
        mensajeEnPantalla(`¡Lo has adivinado correctamente!...🎉🎉`);
        finJuego();
    } else if (adivinar < numeroAleatorio) {
        mensajeEnPantalla(`¡Demasiado bajo! ¡Inténtalo de nuevo!.⏬`);
    } else if (adivinar > numeroAleatorio) {
        mensajeEnPantalla(`¡Demasiado alto! ¡Inténtalo de nuevo!.⚡`);
    }
}

function mostrarConjenturas(adivinar){
    entradaUsuario.value = '';
    adivinaDispara.innerHTML += `${adivinar}  `;
    adivinaNum++
    restanteDisparos.innerHTML = `${11 - adivinaNum}  `;
}

function mensajeEnPantalla(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function finJuego(){
    //Clear user input
    entradaUsuario.value = '';
    //Disable user input button
    entradaUsuario.setAttribute('disabled', '');
    //Display Start new Game Button
          p.classList.add('button');
          p.innerHTML = `<h2 id="newGame">Empieza un juego nuevo😛</h2>`
    comenzarDeNuevo.appendChild(p);
    jugarJuego = false;
    nuevoJuego();
}

function nuevoJuego(){
    const nuevoJuegoBoton = document.querySelector('#newGame');
    nuevoJuegoBoton.addEventListener('click', function(){
        //Pick a new random number
        numeroAleatorio = parseInt((Math.random()*100)+1);
        anteriorAdivina = [];
        adivinaNum = 1;
        adivinaDispara.innerHTML = '';
        lowOrHi.innerHTML = '';
        restanteDisparos.innerHTML = `${11 - adivinaNum}  `;
        entradaUsuario.removeAttribute('disabled');
        comenzarDeNuevo.removeChild(p);
        jugarJuego = true;
    })
}
//Allow to restart game with restart button
//Change DIV to a form so it can accept the enter key

//NOTES:
//NaN != NaN