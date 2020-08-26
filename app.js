var i = 0;
var txt = "Web Developer"; /* el texto */
var speed = 50; /* La duracion en milisegundos */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("parrafo_principal").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
