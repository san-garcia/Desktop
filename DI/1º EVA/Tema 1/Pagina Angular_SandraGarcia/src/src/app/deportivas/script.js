// script.js

const scrollContainer = document.getElementById("scroll-container");
const scrollAmount = 300; // Ajusta esta cantidad para cambiar la distancia de desplazamiento

function scrollRight() {
    scrollContainer.scrollLeft += scrollAmount;
}

function scrollLeft() {
    scrollContainer.scrollLeft -= scrollAmount;
}
