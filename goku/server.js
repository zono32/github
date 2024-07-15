const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Configuración manual de CSP
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;");
  next();
});

// Configuración para parsear application/json
app.use(bodyParser.json());

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Configuración de la conexión a MySQL


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Aquí debes poner tu contraseña de MySQL
  database: 'goku',
  port: '3306',
});


/*
//conexión con docker.
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'kinso', // Aquí debes poner tu contraseña de MySQL
  database: process.env.MYSQL_DATABASE || 'goku',
  port: '3306',
});
*/

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err.stack);
    return;
  }
  console.log('Conexión exitosa al servidor MySQL');
});

// Ruta para registrar un usuario
app.post('/api/users/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
   

    const INSERT_USER_QUERY = `INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)`;
    const values = [username, email, hashedPassword];

    connection.query(INSERT_USER_QUERY, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al registrar usuario' });
      } else {
        console.log(result);
        res.status(200).json({ message: 'Usuario registrado exitosamente' });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Ruta para autenticar un usuario
app.post('/api/users/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Autenticando usuario:', { username, password });

  const SELECT_USER_QUERY = `SELECT * FROM usuarios WHERE username = ? AND password = ?`;
  const values = [username, password];

  connection.query(SELECT_USER_QUERY, values, async (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al autenticar usuario' });
    } else {
      if (result.length > 0) {
        const user = result[0];
        console.log('Usuario encontrado:', user);
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
     


      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    }
  });
});


// Puerto en el que se ejecuta el servidor
const PORT = process.env.PORT || 5500;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
