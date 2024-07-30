import React, { useState } from 'react'

const Buscador = ({setListadoState, listadoState}) => {

  const [busqueda, setBusqueda] = useState('')

  const buscarPlelicula = (e) => {
    //Crear estado y actalizarlo
    setBusqueda(e.target.value);
    
    //Filtrar para buscar coincidencias
    let peliculasEncontradas = listadoState.filter(pelicula => {
      return pelicula.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    })

    if (busqueda.length <= 1 || peliculasEncontradas <= 0) {
      peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
    } else {
      
    }
    console.log(peliculasEncontradas);
    //Actualizar el estado del listado principal con lo que se ha logrado filtrar
    setListadoState(peliculasEncontradas)
}

  return (
    <>
      <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
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
