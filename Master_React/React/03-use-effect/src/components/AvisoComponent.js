import React, { useEffect } from 'react'

const AvisoComponent = () => {

    useEffect(() => {
        //cuando el componente se monta
        alert('El componente aviso alert está montado')

        //Cuando el componente se desmonta
        return () => {
            alert("componente desmontado")
        }
    }, []); //Se ejecuta una vez por que le estoy pasando el array vacio.


  return (
      <div>
          <hr/>
          <h2>Hola Kinso como estás??</h2>
          <button onClick={ (e)=>{alert('Bienvenido a tu casa')}}>Motrar alerta</button>
    </div>
  )
}

export default AvisoComponent
