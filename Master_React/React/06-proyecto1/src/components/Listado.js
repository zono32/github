import React, { useEffect, useState} from "react";
import Editar from "./Editar";

const Listado = ({listadoState, setListadoState}) => {
    // const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0)
    
    useEffect(() => {
        console.log("Componente del listado de peliculas cargado");
        conseguirPeliculas();
      },[]);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
      setListadoState(peliculas);
      return peliculas;
  };

 
    
    const borrarPelicula = (id) => {
        //Conseguir peliculas almacenadas
        let peliculasAlmacenadas = conseguirPeliculas();

        //Filtrar esas películas para que las elimine del array
        let nuevoArrayPeliculas = peliculasAlmacenadas.filter(pelicula => pelicula.id !== parseInt(id))

        console.log(peliculasAlmacenadas, nuevoArrayPeliculas)

        //Actualizar el estado del listado
        setListadoState(nuevoArrayPeliculas)

        //Actualizar los datos del localStorage
        localStorage.setItem('peliculas', JSON.stringify(nuevoArrayPeliculas));
    }

  return (
    <>
      {/*Aquí van la películas*/}
          {listadoState != null ?
              
              listadoState.map((pelicula) => {
        return (
          <article key={pelicula.id} className="peli-item">
                <h3 className="title">{pelicula.titulo}</h3>
                <p className="descipcion">{pelicula.descripcion}</p>
                <button className="edit" onClick={ ()=>{ setEditar(pelicula.id)}}>Editar</button>
                <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Eliminar</button>

                {/*Aparece un formulario para editar*/}
                {editar === pelicula.id && ( 
                    <Editar pelicula={pelicula}
                        conseguirPeliculas={conseguirPeliculas}
                        setEditar={setEditar}
                        setListadoState={setListadoState} />                    
                )}
          </article>
        );
              })
    :<h2>No hay películas para mostrar</h2>}
    </>
  );
};

export default Listado;
