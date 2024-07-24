import React, { useState } from "react";

const MiPrimerEstado = () => {
  /*
    let nombre = "Master Zono ";

    const cambiarNombre = e => {
        nombre = "Kinso Lafuente ";
    }
    */

  const [nombre, setNombre] = useState("Master zono");

  const cambiarNombre = (e, nombre) => {
    setNombre(nombre);
    console.log(e.target)
  };

  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <strong className="label">{nombre}</strong>
      &nbsp;
      <button onClick={(e) => cambiarNombre(e, "Kinso Lafuente")}>
        cambiar nombre por Kinso Lafuente
      </button>
      &nbsp;
      <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder="cambia el nombre" ></input>
    </div>
  );
};

export default MiPrimerEstado;
