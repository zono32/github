
const prueba = ( req, res) => {
    return res.status(200).json({
        mensaje: 'Soy una acción de prueba en mi controlador de articulos'
    });

}

module.exports = {
    prueba
}