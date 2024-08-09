const { conexion } = require('./database/conexion');
const  express = require('express');
const  cors = require('cors');

//Inicializar app
console.log('App de node arrancada');

//Conectar a la base de datos
conexion();

//Crear servidor de node
const app = express();
const puerto = 3900;

//Configurar el cors
app.use(cors());

//Convertir body a objeto js
app.use(express.json());


//crear rutas
const rutasArticulo = require('./rutas/Articulo');

//Cargo las rutas
app.use('/api', rutasArticulo)

//Cear rutas de prueba
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando")
    return res.status(200).json([{
        curso: 'Master en React',
        autor: 'Victor Robles',
        url: 'Victorroblesweb.es/master-resct'
    },
    {
        curso: 'Master en React',
        autor: 'Victor Robles',
        url: 'Victorroblesweb.es/master-resct'
    }]); /* `
        <div>
            <h1>Probando ruta nodejs</h1>
            <p>Creando api rest con node</p>
            <ul>
            <li>Master en React</li>
            <li>Master en PHP</li>
            </ul>
        </div>
        `);*/
})
app.get("/", (req, res) => {
   
    return res.status(200).send(
        "<h1>Empezando a crear una api con nodejs</h1>"
    );
});

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log('servidor corriendo en el puerto ' + puerto);
});
