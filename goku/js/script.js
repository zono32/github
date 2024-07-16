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

    // Validar contraseñas
    function validarContrasena(password) {
        /*
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            return 'La contraseña debe tener al menos 8 caracteres.';
        }
        if (!hasUpperCase) {
            return 'La contraseña debe tener al menos una letra mayúscula.';
        }
        if (!hasLowerCase) {
            return 'La contraseña debe tener al menos una letra minúscula.';
        }
        if (!hasNumbers) {
            return 'La contraseña debe tener al menos un número.';
        }
        if (!hasSpecialChar) {
            return 'La contraseña debe tener al menos un carácter especial.';
        }*/

        return '';
    }

    // Manejar el envío del formulario de registro
    registroForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('registroEmail').value;
        const password = document.getElementById('registroPassword').value;
    
        const validationMessage = validarContrasena(password);
        if (validationMessage) {
            alert(validationMessage);
            return;
        }
    
        try {
            // Verificar si el usuario ya existe antes de enviar los datos de registro
            const checkResponse = await fetch(`http://localhost:5500/api/users/check-user?username=${username}&email=${email}`);
            const checkData = await checkResponse.json();
    
            if (checkResponse.ok) {
                if (checkData.exists) {
                    alert('El usuario o el correo electrónico ya están registrados.');
                    return;
                }
            } else {
                alert(checkData.message);
                return;
            }
    
            // Enviar los datos de registro si el usuario no existe
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
                window.location.href = '/inicio.html';
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al registrarse.');
        }
        registroForm.reset();
    });
    
    // Manejar el envío del formulario de login
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
    
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
                // Login exitoso, redirigir a la página de inicio
                window.location.href = '/inicio.html'; // Cambia '/inicio.html' por la ruta de tu página deseada
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al iniciar sesión.');
        }
        loginForm.reset();
    });
});
