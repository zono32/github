import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContex'

const Contacto = () => {

  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h2>Contacto</h2>
      <p>Esta es la página de Contacto</p>
      <p>Valor compartido: <pre>{JSON.stringify(datoDesdeElContexto)}</pre></p>
      {/*
      
      <p>Valor compartido: <strong>{datoDesdeElContexto.contenido}</strong></p>
      */}
    </div>
  )
}

export default Contacto
