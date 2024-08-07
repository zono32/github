import React, { useContext } from "react";
import { PruebaContext } from "./context/PruebaContex";

const Login = () => {

  const { setUsuario } = useContext(PruebaContext);

  const guardarDatos = (e) => {
    e.preventDefault();
    let usuarioidentificado = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value,
    };

    setUsuario(usuarioidentificado)

  };

  return (
    <div>
      <h2>Login</h2>
      <p>Esta es la página de Login</p>

      <form className="login" onSubmit={guardarDatos}>
        <input
          type="text"
          name="nick"
          id="nick"
          placeholder="nick usuario"
        ></input>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="nombre usuario"
        ></input>
        <input
          type="text"
          name="web"
          id="web"
          placeholder="web usuario"
        ></input>
        <input type="submit" name="enviar" value="Enviar" />
      </form>
    </div>
  );
};

export default Login;
