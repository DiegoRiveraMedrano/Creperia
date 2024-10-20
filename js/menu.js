bars = document.querySelector(".nav__bars");
bars.onclick= function() {
    navBAR = document.querySelector(".nav__bar");
    navBAR.classList.toggle("active")
 // Selecciona el elemento <header>
    var header = document.querySelector("header");
    
 // Agrega o quita la clase "nav--color" según si la clase "active" está presente en navBAR
    if (navBAR.classList.contains("active")) {
     header.classList.add("nav--color");
    } else {
     header.classList.remove("nav--color");
    }
}
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;

    // Si el desplazamiento es mayor que 0, agrega la clase "nav--colorscroll"; de lo contrario, quítala.
    if (scrollPosition > 0) {
        header.classList.add("nav--colorscroll");
    } else {
        header.classList.remove("nav--colorscroll");
    }
});