import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContex'

const Inicio = () => {

  //const compartida = useContext(PruebaContext);

  const {usuario} = useContext(PruebaContext);


  return (
    <div>
      <h2>Inicio</h2>     
      <p>Esta es la página de Inicio</p>
      <p>Nombre: <strong>{usuario.nombre}</strong></p>
      {/*<p>Valor compartido: <strong>{compartida.titulo}</strong></p>*/}
    </div>
  )
}

export default Inicio
