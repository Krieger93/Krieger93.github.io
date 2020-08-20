var i = 0;
var txt = "Desarrollo Web"; /* el texto */
var speed = 50; /* La duracion en milisegundos */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("parrafo_principal").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
