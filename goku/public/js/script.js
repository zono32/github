document.addEventListener('DOMContentLoaded', function() {
    const registroModal = document.getElementById('registroModal');
    const loginModal = document.getElementById('loginModal');
    const openRegistro = document.getElementById('openRegistro');
    const openLogin = document.getElementById('openLogin');
    const closeRegistro = document.getElementById('closeRegistro');
    const closeLogin = document.getElementById('closeLogin');
    const registroForm = document.getElementById('registroForm');
    const loginForm = document.getElementById('loginForm');

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
    registroForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        console.log('Registro submit event fired');

        const username = document.getElementById('username').value;
        const email = document.getElementById('registroEmail').value;
        const password = document.getElementById('registroPassword').value;

        console.log({ username, email, password });

        try {
            const response = await fetch('http://localhost:5500/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
               // alert('Usuario registrado exitosamente');
                registroModal.style.display = 'none';
                window.location.href = '/public/inicio.html';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema con el registro.');
        }
        registroModal.style.display = 'none';
        registroForm.reset();
    });

    // Manejar el login
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        console.log('Login submit event fired');

        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        console.log({ username, password });

        try {
            const response = await fetch('http://localhost:5500/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                //alert('Inicio de sesión exitoso');
                loginModal.style.display = 'none';
                // Redirigir a la página de inicio del programa
                window.location.href = '/public/inicio.html';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema con el inicio de sesión.');
        }
        loginForm.reset();
    });
});
