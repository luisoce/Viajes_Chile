//CAMBIAR COLOR NAVBAR SEGUN POSICION SCROLL
$(window).scroll(function () {
  let pos = $(window).scrollTop(); //obtengo posicion scroll
  if (pos < 100) {
    // comparo si es menor a 100px
    $("nav").addClass("bg-transparent"); //añado clase bg-dark
    $("nav").removeClass("navbar-negro"); //quito clase bg-transparent
  } else {
    //si es mayor o igual a 100px la posicion de scroll
    $("nav").removeClass("bg-transparent"); // quito la clase bg-dark
    $("nav").addClass("navbar-negro"); //añado la clase bg-transparent
  }
});

// INCORPORANDO SMOOTHSCROLL
$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();
    var gato = this.hash;

    $("html").animate(
      {
        scrollTop: $(gato).offset().top - 57,
      },
      800
    );
  });
});
// INCORPORANDO TOOLTIP BOOTSTRAP 4.6
$('[data-toggle="tooltip"]').tooltip();
// INCORPORANDO POPOVER BOOTSTRAP 4.6
$('[data-toggle="popover"]').popover();
