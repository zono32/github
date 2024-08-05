import React, { useMemo, useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(5500);

  const agregarTarea = (e) => {
    e.preventDefault();

    let tareasActualizadas = [...tareas, e.target.descripcion.value];
    setTareas(tareasActualizadas);
    console.log(tareas);
  };

  const borrarTarea = (id) => {
    // filtar las tareas para borrar la que no quiero

    let nuevasTareas = tareas.filter((tarea, indice) => indice !== id);
    console.log(nuevasTareas);

    //uardar el nuevo listado de tareas en el listado
    setTareas(nuevasTareas);
  };

  const sumarAlContador = (e) => {
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulacion) => {
    for (let i = 0; i <= acumulacion; i++) {
        console.log("Ejecutando acumulación de contadores pasados");
        
        console.log('se sumó '+i+' al contador en fecha 19/01/1978')
    }
    return `Contador manuel de tareas ${acumulacion}`;
    };
    
    const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className="tareas-container">
      <h1>Mis tareas </h1>
      <form onSubmit={agregarTarea}>
        <input type="text" name="descripcion" placeholder="Ingrese tarea" />
        <input type="submit" value="Guardar" />
      </form>

      <h3>{memoContadores}</h3>
      <button onClick={sumarAlContador}>Sumar</button>

      <h3>Lista de tareas</h3>
      <ul>
        {tareas.map((tarea, indice) => {
          return (
            <li key={indice}>
              {tarea} &nbsp;
              <button onClick={() => borrarTarea(indice)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
