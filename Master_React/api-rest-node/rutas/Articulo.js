const express = require('express');
const router = express.Router();

const ArticuloControler = require('../controladores/Articulo');

//Rutas de prueba
router.get('/ruta-de-prueba', ArticuloControler.prueba);


module.exports = router;