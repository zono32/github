const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Asegúrate de tener el modelo de usuario definido

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Verificar si el usuario o el correo ya existen
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o correo electrónico ya están en uso.' });
        }

        // Crear un nuevo usuario
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
});


// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario por nombre de usuario en la base de datos
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas name' });
        }

        // Verificar si la contraseña es correcta
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas psw' });
        }

        // Si las credenciales son válidas, enviar una respuesta exitosa
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Hubo un problema en el inicio de sesión' });
    }
});

module.exports = router;
