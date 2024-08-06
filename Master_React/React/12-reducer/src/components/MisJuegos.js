import React, { useEffect, useReducer } from "react";
import { JuegoReducer } from "../reducers/JuegoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};

export const MisJuegos = () => {
  const [juegos, dispach] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    console.log(juego);

    const accion = {
      type: "crear",
      payLoad: juego,
    };
    dispach(accion);
    };
    
    const eliminarJuego = (id) => {
        const action = {
            type: 'borrar',
            payLoad: id
        }
        dispach(action);
    }

    const editar = (e, id) => {
        console.log(e.target.value, 'editar', id)
        
        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        };
        const action = {
            type: 'editar',
            payLoad: juego
        };

        dispach(action);
    }

  return (
    <div>
      <h1>Estos sin mis videojuegos</h1>

      <p>Numero de videojuegos: {juegos.length}</p>

      <ul>
        {juegos.map( juego => (
            <li key={juego.id}>
                {juego.titulo}
                &nbsp; <button onClick={e => eliminarJuego(juego.id)}>x</button>
                &nbsp; <input type="text" onBlur={e => editar(e, juego.id)}
                    onKeyPress={e => {
                        if (e.key === "Enter") {
                            editar(e, juego.id);
                            console.log('has presionado enter')
                        }
                    }} />
            </li>
        ))}
      </ul>

      <h3>Agregar juego</h3>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="Titulo" />
        <textarea name="descripcion" placeholder="descripcion" />
        <input type="submit" value="guardar" />
      </form>
    </div>
  );
};
