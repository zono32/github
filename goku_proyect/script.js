document.addEventListener('DOMContentLoaded', function() {
    const registroModal = document.getElementById('registroModal');
    const loginModal = document.getElementById('loginModal');
    const openRegistro = document.getElementById('openRegistro');
    const openLogin = document.getElementById('openLogin');
    const closeRegistro = document.getElementById('closeRegistro');
    const closeLogin = document.getElementById('closeLogin');

    // Mostrar modal de registro al hacer clic en el enlace
    openRegistro.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
        registroModal.style.display = 'flex'; // Mostrar el modal
    });

    // Mostrar modal de login al hacer clic en el enlace
    openLogin.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace recargue la página
        loginModal.style.display = 'flex'; // Mostrar el modal
    });

    // Cerrar el modal de registro al hacer clic en el botón de cierre
    closeRegistro.addEventListener('click', function() {
        registroModal.style.display = 'none'; // Ocultar el modal
    });

    // Cerrar el modal de login al hacer clic en el botón de cierre
    closeLogin.addEventListener('click', function() {
        loginModal.style.display = 'none'; // Ocultar el modal
    });

    // Cerrar los modales al hacer clic fuera de ellos
    window.addEventListener('click', function(event) {
        if (event.target === registroModal) {
            registroModal.style.display = 'none';
        }
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
