//generate random numbers-----------generar un numeroa leatorio
let primerNumero = parseInt(Math.random() * 10);
let segundoNumero = parseInt(Math.random() * 10);

//get the total-----------------obten el total
let total = primerNumero + segundoNumero;
    
//display numbers on the canvas
let primario = document.getElementById('primary-number');
    primario.innerHTML = `<h4>${primerNumero}</h4>`;

let secundario = document.getElementById('secondary-number');
    secundario.innerHTML = `<h4>${segundoNumero}</h4>`

//get guess from user---------------Obtener conjetura del usuari@
let boton = document.getElementById('btn');

boton.addEventListener('click', () => {

let adivinar = document.getElementById('guess').value;
    adivinar = Number(adivinar);
//check answer-----------------checar respuesta
if (adivinar === total) {
    alert('Correcto...🎉🎉🎉🎉🎉🎉🎉🎉');
    window.location.reload();
} else {
    alert('Lo siento maje. Incorrecto. La respuesta correcta era' + total + '...😛')
    window.location.reload();
};
    });
