import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir película";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState

    const conseguirDatosFormulario = (e) => {
        e.preventDefault();
        //conseguir datos del formulario
        let datos = e.target;
        let titulo = datos.titulo.value;
        let descripcion = datos.descripcion.value;
        
        //Crear objeto película para guardarlo

        let pelicula =  {
            id: new Date().getTime(),//obtiene la fecha unix así siempre es distinta.
            titulo: titulo,
            descripcion: descripcion
        }

        //guardar estado
      setPeliState(pelicula);
      
      //Actualizar el estado del listado principal
      setListadoState(elementos => {
        return [...elementos, pelicula];
      });

      //Guardar en el almacenamiento local
      GuardarEnStorage('peliculas', pelicula);
      
     
    }    

  return (
    <>
        <div className="add">
              <h3 className="title">{tituloComponente}</h3>
              <strong>
                {(titulo && descripcion) && 'Se ha añadido: '+ titulo}
              </strong>
              

            <form onSubmit={conseguirDatosFormulario}>
                <input type="text" id='titulo' placeholder="Titulo"/>
                <textarea name="descripcion" id="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id='save'  value="Guardar"/>
            </form>            
        </div>
    </>
  )
}

export default Crear
