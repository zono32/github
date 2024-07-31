import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Persona = () => {
    //Valores por defecto en parámetros opcionales
    //let {nombre ="Kinso", apellido ="Lafuente" } = useParams();  
    
    const { nombre, apellido } = useParams();
    const navegar = useNavigate();
    
    const enviar = (e) => {
        e.preventDefault()
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        let url = `/persona/${nombre} ${apellido}`;
        if (nombre.length <= 0 && apellido <= 0) {
            navegar("/inicio")
        } else if (nombre === "contacto") {
            navegar("/contacto")
        }
        else {
            navegar(url)
        }
        
    }

  return (
      <div>
          {!nombre && <h2>No hay ninguna persona que mostrar</h2>}
          {nombre && <h1>Página de persona: {nombre} {apellido}</h1>}          
          <p>Esta es la página de persona</p>
          <form onSubmit={enviar}>
              <input type='text' name='nombre' />
              <input type='text' name='apellido' />
              <input type='submit' name='enviar' value="enviar"/>
          </form>


    </div>
  )
}

export default Persona
