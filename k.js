let despertar = 7;
let medioDia = 12;
let almuerzo = 12;
let horaDeSiesta = almuerzo + 2;
let tiempoFiesta;
let noche = 18;

// Getting it to show the current time on the page-----Hacer que muestre la hora actual en la página
let mostrarHoraActual = function()      {
    // display the string on the webpage------------muestra la cadena en la página web
    let reloj = document.getElementById('clock');
 
    let horaActual = new Date();
 
    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();
    // let milisegundos = horaActual.getMilliseconds();
    let meridiano = "AM";
 
    // Set horas-------------------establecer horas
	  if (horas >= medioDia)
	  {
		  meridiano = "PM";
	  }

	  if (horas > medioDia)
	  {
          horas = horas - 12;
	  }
 
    // Set minutos--------establecer minutos
    if (minutos < 10)
    {
        minutos = "0" + minutos;
    }
 
    // Set segundos--------------establecer segundos
    if (segundos < 10)
    {
        segundos = "0" + segundos;
    }
 
    // put together the string that displays the time
    let horaDelReloj = horas + ':' + minutos + ':' + segundos +/* ":" + milisegundos + */ " " + meridiano + "!";
    reloj.innerText = horaDelReloj;
};

// Getting the reloj to increment on its own and change out messages and pictures
let actualizarReloj = function() 
{
  let tiempo = new Date().getHours();
  let mensajeDeTexto;
  let imagen = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let lolcatImageJS = document.getElementById('lolcatImage');
  
  
  if (tiempo == tiempoFiesta)
  {
    imagen = "https://image.freepik.com/vector-gratis/paisaje-noche-estrellada-fondo-bosque-pinos_105940-526.jpg";
    mensajeDeTexto = "¡vamos de fiesta!";
  }
  else if (tiempo == despertar)
  {
    imagen = "https://d2j8kvlhepn2ch.cloudfront.net/wp-content/uploads/gatito-pequeno-pies-166153.jpg";
    mensajeDeTexto = "¡despierta!";
  }
  else if (tiempo == almuerzo)
  {
    imagen = "https://i.pinimg.com/originals/d9/69/24/d96924bd16fd90642692f96449fd16ac.jpg";
    mensajeDeTexto = "¿almorzamos?";
  }
  else if (tiempo == horaDeSiesta)
  {
    imagen = "https://img.blogs.es/anexom/wp-content/uploads/2018/03/programar-920x515.jpg";
    mensajeDeTexto = "¡hora de programar!";
  }
  else if (tiempo < medioDia)
  {
    imagen = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    mensajeDeTexto = "¡buenos dias bb :3!";
  }
  else if (tiempo >= noche)
  {
    imagen = "https://assets.unenvironment.org/2020-02/Photo_jaguar_wwf_staffan_widstrand.jpeg";
    mensajeDeTexto = "¡buenas noches!";
  }
  else
  {
    imagen = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP";
    mensajeDeTexto = "¡buenas tardes!";
  }

//   console.log(mensajeDeTexto); 
  timeEventJS.innerText = mensajeDeTexto;
  lolcatImage.src = imagen;
  
  mostrarHoraActual();
};
actualizarReloj();

//Getting the reloj to increment once a second-------Hacer que el reloj se incremente una vez por segundo
let unSegundo = 1000;
setInterval( actualizarReloj, unSegundo);


// Getting the Party Time Button To Work
let tiempoFiestaBoton = document.getElementById("partyTimeButton");

let fiestaEvento = function()
{
    if (tiempoFiesta < 0) 
    {
        tiempoFiesta = new Date().getHours();
        tiempoFiestaBoton.innerText = "¡Se acabó la fiesta!";
        tiempoFiestaBoton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        tiempoFiesta = -1;
        tiempoFiestaBoton.innerText = "¡Tiempo de fiesta!";
        tiempoFiestaBoton.style.backgroundColor = "#222";
    }
};

tiempoFiestaBoton.addEventListener("click", fiestaEvento);
fiestaEvento(); 


// Activates Wake-Up selector
let despertarSelector =  document.getElementById("wakeUpTimeSelector");

let despertarEvento = function()
{
    despertar = despertarSelector.value;
};

despertarSelector.addEventListener("change", despertarEvento);


// Activates Lunch selector
let almuerzoSelector =  document.getElementById("lunchTimeSelector");

let eventoAlmuerzo = function()
{
    almuerzo = almuerzoSelector.value;
};

almuerzoSelector.addEventListener("change", eventoAlmuerzo);


// Activates Nap-Time selector
let horaDeSiestaSelector =  document.getElementById("napTimeSelector");

let eventoSiesta = function()
{
    horaDeSiesta = horaDeSiestaSelector.value;
};

horaDeSiestaSelector.addEventListener("change", eventoSiesta);