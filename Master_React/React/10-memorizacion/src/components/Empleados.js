import React, { useEffect, useState } from "react";

export const Empleados = ({ page = 1 }) => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    conseguirEmpleados(page);
  }, [page]);

  const conseguirEmpleados = async (p) => {
    const url = "https://reqres.in/api/users?page=" + p;
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();

    setEmpleados(empleados);
    console.log("Se completo la ejecucion ajax");
  };

  console.log("reender");

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
};
