$("document").ready(() => {
  // Mobile Menu Toggle Button jQuery
  $("#menu-btn").click(function testing() {
    $(".mobile-menu").toggle();
  });
  var i = 0;
  /* el texto */
  var txt = "Front-End Developer";
  /* La duracion en milisegundos */
  var speed = 50;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("parrafo_principal").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});
