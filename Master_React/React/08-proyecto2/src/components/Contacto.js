import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
      <h2 className='heading'>Contacto</h2>
      <form className='contact' action='mailto:masterzono32@gmail.com'>        
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellidos' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Motivo de contacto'/>
        <input type='submit' value='enviar'/>
      </form>
      
    </div>
  )
}

export default Contacto
