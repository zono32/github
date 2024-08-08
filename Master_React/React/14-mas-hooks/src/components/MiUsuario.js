import React, { useState } from "react";
import useAjax from "../hooks/useAjax";

const MiUsuario = () => {

  const [url, setUrl] =useState("https://reqres.in/api/users/1")
  const { datos, cargando } = useAjax(url);

  const getId = (e) => {
    let id = e.target.value;
    setUrl("https://reqres.in/api/users/" + id) ;   
  };

  return (
    <div>
      <h2>Mi Usuario: </h2>
      <p>Datos del usuario</p>
      <p>{cargando ? "Cargando..." : ""}</p>
      <p>
        {datos?.first_name} {datos?.last_name}
      </p>
      <input type="number" name="id" onChange={getId} />
    </div>
  );
};

export default MiUsuario;
