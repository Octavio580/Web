// Función para guardar el nombre y mostrar la página principal
function guardarNombre() {
    let nombre = document.getElementById("username").value.trim();
    if (nombre) {
        localStorage.setItem("nombre", nombre);
        mostrarContenido(nombre);
    } else {
        alert("Por favor, ingrese su nombre.");
    }
}

// Función para obtener el saludo según la hora
function obtenerSaludo() {
    let hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return "Buenos días";
    if (hora >= 12 && hora < 18) return "Buenas tardes";
    return "Buenas noches";
}

// Mostrar saludo y ocultar la pantalla de bienvenida
function mostrarContenido(nombre) {
    let saludo = obtenerSaludo();
    document.getElementById("greeting").textContent = `${saludo}, ${nombre}! Bienvenido a BodyTec.`;

    // Animación de salida del overlay
    document.getElementById("welcome-screen").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    }, 500);
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    let nombre = localStorage.getItem("nombre");
    if (nombre) {
        mostrarContenido(nombre);
    }
});