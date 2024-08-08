import React from 'react';
import { useMayus } from '../hooks/useMayus'

const PruebasCuston = () => {


    const { estado, mayusculas, minusculas, concatenar } = useMayus('Kinso lafuente o Master Zono'); 

  return (
    <div>
          <h2>Probando componentes personalizados</h2>

                <h3>{estado}</h3>
          
          <button onClick={mayusculas}>Poner en mayusculas</button>
          <button onClick={minusculas}>Poner en minusculas</button>
          <button onClick={e => concatenar(' Hola que tal?. ')}>Saludar</button>

    </div>
  )
}

export default PruebasCuston
