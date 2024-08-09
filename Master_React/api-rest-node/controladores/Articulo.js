const validator = require("validator");
const Articulo = require("../modelos/Articulo");

const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: "Soy una acción de prueba en mi controlador de articulos",
  });
};

const curso = (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");
  return res.status(200).json([
    {
      curso: "Master en React",
      autor: "Victor Robles",
      url: "Victorroblesweb.es/master-resct",
    },
    {
      curso: "Master en React",
      autor: "Victor Robles",
      url: "Victorroblesweb.es/master-resct",
    },
  ]);
};

const crear = async(req, res) => {
  //Recoger los parametros por post a guardar
  let parametros = req.body;

  //Validar datos
  try {
    let validarTitulo =
      !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: undefined });

    let validarContenido = !validator.isEmpty(parametros.contenido);

    if (!validarTitulo || !validarContenido) {
      throw new Error("No se ha validado la información");
    }
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      mensaje: "Faltan datos por enviar",
    });
  }

  //crear el objeto a guardar

  const articulo = new Articulo(parametros);

  //Asignar valores a objeto basado en el modelo (manual o automático)
  //articulo.titulo = parametros.titulo
  try {
    //Guardar el artículo en la base de datos
    const articuloGuardado = await articulo.save();
    
    //Devolver el resultado
    return res.status(200).json({
      status: "success",
      articulo: articuloGuardado,
      mensaje: "Artículo creado con éxito!!",
    });
  } catch (error) {
    return res.status(400).json({
      status: "Error",
      mensaje: "No se ha guardado el artículo",
    });
  }
};

module.exports = {
  prueba,
  curso,
  crear,
};
