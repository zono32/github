import React from 'react'

const Editar = ({pelicula, conseguirPeliculas, setEditar, setListadoState}) => {

    const tituloComponente = "Editar Película"
    
    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir los datos del evento
        let datos = e.target;

        //buscar indice del objeto de la película con los datos a actualizar
        const peliculasAlmacenadas = conseguirPeliculas();
        const indice = peliculasAlmacenadas.findIndex(pelicula => pelicula.id === id)
        
        //Crear objeto con el indice,

        let peliculaAztualizada = {
            id,
            titulo: datos.titulo.value,
            descripcion: datos.descripcion.value
        }

        //Actualizar el elemento con el indice indicado
        peliculasAlmacenadas[indice] = peliculaAztualizada;

        //Guardar en el LocalStorage
        localStorage.setItem('peliculas',JSON.stringify(peliculasAlmacenadas))

        //y actualizar los estados
        setListadoState(peliculasAlmacenadas);
        setEditar(0);

    }

  return (
      <div className='edit-form'> 
          <h3 className='title'>{tituloComponente} </h3>
          <form onSubmit={e => guardarEdicion(e,pelicula.id)}>
              <input type='text'
                    name='titulo'
                    className='titulo-editado'
                    defaultValue= {pelicula.titulo} />
              <textarea
                  name='descripcion'
                  defaultValue={pelicula.descripcion}
                  className='descripcion-editada' />   
              <input type='submit' className='editar' value='Actualizar'/>
          </form>
          
    </div>
  )
}

export default Editar
