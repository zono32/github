import React, { useEffect, useState } from "react";

export const Empleados = React.memo(({ page, mensaje}) => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    console.log("Se ha vuelto a renderizar Empleados!!");
  }, [empleados]);

  const conseguirEmpleados = async (p) => {
    const url = "https://reqres.in/api/users?page=" + p;
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();

    setEmpleados(empleados);
   
  };

  useEffect(() => {
    conseguirEmpleados(page);
    mensaje();
  }, [page]);

 

  return (
    <div>
      <h2>
        <p>Mostrando la página: {page}</p>
        <ul className="empleados">
          {/*<li>{empleados.length >= 1 && empleados[0].email}</li>*/}
          {empleados.length >= 1 &&
            empleados.map((empleado) => {
              return (
                <li key={empleado.id}>
                  {" "}
                  {empleado.first_name + " " + empleado.last_name}
                </li>
              );
            })}
        </ul>
      </h2>
    </div>
  );
});
