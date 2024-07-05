const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/kinso', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Conectado a la base de datos');
}).catch(err => {
    console.log('Error al conectar a la base de datos', err);
});

// Rutas
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
