var i = 0;
var txt = "Web Developer"; /* el texto */
var speed = 50; /* La duracion en milisegundos */
var txth1 = "Gustavo Jejer [Portafolio]";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("parrafo_principal").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.getElementById("texto_principal").innerHTML = txth1;
typeWriter();
