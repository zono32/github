import React, { useEffect, useState } from 'react'
import AvisoComponent from './AvisoComponent';

const PruebasComponent = () => {

  const [usuario, setUsuario] = useState("Kinso Lafuente");
  const [fecha, setFecha] = useState("01-01-1998");
  const [fecha2, setFecha2] = useState("01-01-1998");
  const [contador, setContador] = useState(0);
  

  const modUsuario = e => {

    setUsuario(e.target.value)
    
  }

  const cambiarFecha = e => {

    setFecha(new Date().toLocaleDateString());
  }

  const cambiarFecha2 = (e) => {
    setFecha2(Date.now()); //formato time unix
  }

  //solo se ejecuta una vez al cargar el componente
  useEffect(() => {
    console.log("has iniciado la prueba");
    
  }, []);

  //se ejecuta cuando se modifica el usuario.
  useEffect(() => {
    console.log("has modificado el nombre de Usuario: "+ contador);

    setContador(contador + 1);
    ;
  }, [usuario]);


  return (
    <div>
      <h2>El efecto - Hook UseEffect</h2>
      <h3 className={ contador>10 ? 'label label-green' : 'label'}>{usuario}</h3>
      <strong>{fecha}</strong>
      <p>
        <input type="text" onChange={modUsuario} placeholder='modifica el usuario' />
        &nbsp;
        <button onClick={cambiarFecha}>Cambiar fecha</button>
        &nbsp;
        <button onClick={cambiarFecha2}>Cambiar fecha tipo2</button>
      </p>
      <strong>{fecha2}</strong>

      { usuario === 'ZONO' && <AvisoComponent/>}
      
    </div>
  )
}

export default PruebasComponent

