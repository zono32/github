import React from 'react'
import { useForm } from '../hooks/useForm'

const MiFormulario = () => {

    const { formulario, enviado, cambiado } = useForm({});

  return (
    <div>
          <p>Formulario para guardar un curso</p>
          <p>Curso guardado: {formulario.titulo} </p>
          <pre className='codigo'>{JSON.stringify(formulario)}</pre>

          <form onSubmit={enviado} className='miFormulario' >
              <input type='text' name='titulo' onChange={cambiado} placeholder='Titulo: ' /> 
              <input type='munber' name='anio' onChange={cambiado} placeholder='Año de publicación: ' /> 
              <textarea type='text' name='descripcion' onChange={cambiado} placeholder='Descripcion: ' /> 
              <input type='text' name='autor' onChange={cambiado} placeholder='Autor: ' /> 
              <input type='email' name='email' onChange={cambiado} placeholder='Correo de contacto: ' /> 
              
              <input type='submit' value='Enviar'/>
          </form>
    </div>
  )
}

export default MiFormulario
