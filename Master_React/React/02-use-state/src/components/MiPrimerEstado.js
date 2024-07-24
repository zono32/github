import React, {useState} from 'react'

const MiPrimerEstado = () => {

    /*
    let nombre = "Master Zono ";

    const cambiarNombre = e => {
        nombre = "Kinso Lafuente ";
    }
    */
    
    const [nombre, setNombre] = useState("Master zono");

    const cambiarNombre = (e) => {
        setNombre("Kinso Lafuente");
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
          <strong>
              {nombre}
          </strong>
          &nbsp;
        <button onClick={cambiarNombre}>cambiar nombre por Kinso Lafuente</button>
    </div>
  )
}

export default MiPrimerEstado
