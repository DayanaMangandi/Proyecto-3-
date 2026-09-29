const boton = document.getElementById("btnEstadisticas");
const estadisticas = document.getElementById("estadisticas");

boton.addEventListener("click", function () {
    estadisticas.textContent = "Carreras: 10| Puntos:250";
});