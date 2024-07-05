document.addEventListener('DOMContentLoaded', function() {
    const registroModal = document.getElementById('registroModal');
    const loginModal = document.getElementById('loginModal');
    const openRegistro = document.getElementById('openRegistro');
    const openLogin = document.getElementById('openLogin');
    const closeRegistro = document.getElementById('closeRegistro');
    const closeLogin = document.getElementById('closeLogin');

    // Asegurarse de que los modales estén ocultos al cargar la página
    registroModal.style.display = 'none';
    loginModal.style.display = 'none';

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

    // Manejar el registro
    const registroForm = document.getElementById('registroForm');
    const loginForm = document.getElementById('loginForm');

    registroForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('registroEmail').value;
        const password = document.getElementById('registroPassword').value;

        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Usuario registrado exitosamente');
            document.getElementById('registroModal').style.display = 'none';
        } else {
            alert(data.message);
        }
    });

    // Manejar el login
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Inicio de sesión exitoso');
            document.getElementById('loginModal').style.display = 'none';
            // Redirigir a la página de inicio del programa
            window.location.href = '/inicio.html';
        } else {
            alert(data.message);
        }
    });
});
