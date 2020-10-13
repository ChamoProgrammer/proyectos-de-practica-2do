let colores = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6];
let color = document.querySelector('#color');
let body = document.querySelector('body');
let boton = document.querySelector('.btn');

boton.addEventListener('click', evento);

    function evento()   {
    let hex = '#';

    for(i = 0; i < 6; i++)  {
         let indice = Math.floor(Math.random() * colores.length);
         hex += colores[indice];
    }
    color.textContent = hex;
    body.style.background = hex;
};