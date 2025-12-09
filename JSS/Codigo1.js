document.addEventListener("DOMContentLoaded", () => {

    // Crear el menú lateral dinámicamente
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    sidebar.innerHTML = `
        <button class="close-btn">✕</button>

        <a href="#">Inicio</a>
        <a href="#">Recetas</a>
        <a href="#">Sobre Nosotros</a>

        <div class="sidebar-redes">
            <img src="IMG/Facebook logo.png">
            <img src="IMG/Tiktok logo.png">
            <img src="IMG/Twitter logo.png">
        </div>
    `;

    document.body.appendChild(sidebar);

    const menuBtn = document.querySelector(".menu-icon");
    const closeBtn = sidebar.querySelector(".close-btn");

    // Abrir menú
    menuBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    // Cerrar menú
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

});


