import React, { useEffect, useLayoutEffect, useState } from "react";

const EjemploComponente = () => {
  const [mostrar, setMostrar] = useState(false);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Componente cargado !!!");
    // let caja = document.querySelector("#caja");
    // caja.innerHTML = 'Hola';
    // console.log(caja.getBoundingClientRect());
  }, []);

  useEffect(() => {
    console.log("useEffect: Componente cargado !!!");
    // let caja = document.querySelector("#caja");
    // caja.innerHTML = 'Hola2';
    // console.log(caja.getBoundingClientRect());
  }, [mostrar]);


  return (
    <div>
      <h1>Ejemplo UseEffect y useLayoutEffect;</h1>
      <button
        onClick={() =>
          setMostrar((prev) => {
            console.log(!prev);
            return !prev;
          })
        }
      >
        Mostrar mensaje
      </button>

      {mostrar && <div id="caja">Hola soy un mensaje</div>}

      
    </div>
  );
};

export default EjemploComponente;
