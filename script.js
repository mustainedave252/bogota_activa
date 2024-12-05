document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.getElementById("events-container");

    // Lista de eventos de ejemplo
    const events = [
        { title: "Feria de Arte Local", category: "Cultura", description: "Explora las obras de artistas locales en la Plaza Central." },
        { title: "Torneo de Fútbol Infantil", category: "Deportes", description: "Inscribe a tu equipo y compite en el torneo municipal." },
        { title: "Jornada de Salud Gratuita", category: "Salud", description: "Recibe atención médica básica en los puntos habilitados." },
        { title: "Taller de Robótica", category: "Educación", description: "Aprende a construir y programar robots desde cero." },
    ];

    // Cargar eventos en la interfaz
    function loadEvents(events) {
        eventsContainer.innerHTML = ""; // Limpiar contenedor
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.className = "event-card";
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Categoría:</strong> ${event.category}</p>
                <p>${event.description}</p>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    // Filtrar eventos por búsqueda
    document.getElementById("search-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const query = document.getElementById("search-input").value.toLowerCase();
        const filteredEvents = events.filter(event =>
            event.title.toLowerCase().includes(query) ||
            event.category.toLowerCase().includes(query) ||
            event.description.toLowerCase().includes(query)
        );
        loadEvents(filteredEvents);
    });

    // Filtro por categoría
    document.querySelectorAll(".category").forEach(category => {
        category.addEventListener("click", () => {
            const categoryName = category.dataset.category;
            const filteredEvents = events.filter(event => event.category.toLowerCase() === categoryName.toLowerCase());
            loadEvents(filteredEvents);
        });
    });

    // Cargar todos los eventos al inicio
    loadEvents(events);
});
