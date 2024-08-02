import React, { useEffect, useState } from "react";
import { Empleados } from "./Empleados";

export const Gestion = () => {
    const [nombre, setNombre] = useState("gestor");
    const [page, setPage] = useState(1);
    useEffect(() => {
        console.log('La vista se ha reenderizado')
    })

    const asignarGestor = (e) => {
        setNombre(e.target.value);
    }

  return (
    <div>
          <h1>Nombre del gestor: {nombre}</h1>
          <input type="text" onChange={asignarGestor} placeholder="Introduce el nombre del gestor"/>

      <h2>Listado de Empleados</h2>
          <p>Los usuarios vienen de Jsonplaceholder son gestionados por {nombre}</p>
          <button onClick={() => { setPage(1) }}>Página 1</button>
          <button onClick={() => { setPage(2) }}>Página 2</button>
      <Empleados page={page} />
    </div>
  );
};
