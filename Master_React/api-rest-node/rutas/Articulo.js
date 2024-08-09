const express = require('express');
const router = express.Router();

const ArticuloControler = require('../controladores/Articulo');

//Rutas de prueba
router.get('/ruta-de-prueba', ArticuloControler.prueba);
router.get('/curso', ArticuloControler.curso);

//ruta util

router.post('/crear', ArticuloControler.crear);



module.exports = router;