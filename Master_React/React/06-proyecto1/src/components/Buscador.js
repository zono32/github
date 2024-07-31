import React, { useState } from 'react'

const Buscador = ({setListadoState, listadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncontrado, setNoencontrado] = useState(false);

  const buscarPlelicula = (e) => {
    //Crear estado y actalizarlo
    setBusqueda(e.target.value);
    console.log(busqueda)

    //Filtrar para buscar coincidencias
    let peliculasEncontradas = listadoState.filter(pelicula => {
      
      return pelicula.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
     
    })
    console.log(peliculasEncontradas)
    if (busqueda.length <= 1 || peliculasEncontradas <= 0) {
      peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
      setNoencontrado(true);
    }else{
      setNoencontrado(false);
    }

    //console.log(peliculasEncontradas);
    //Actualizar el estado del listado principal con lo que se ha logrado filtrar
    setListadoState(peliculasEncontradas)
}

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>

        {(noEncontrado == true && busqueda.length > 2 ) && (
          <span className='noEncontrado'>No se ha encontrado ninguna coincidencia</span>
        )}
        
            <form>
              <input type="text"
                      id="search-field"
                      autoComplete='off'
                      placeholder='Busqueda'
                      onChange={buscarPlelicula} />                   

                <button>Buscar</button>
            </form>
      </div>
    </>
  )
}

export default Buscador
