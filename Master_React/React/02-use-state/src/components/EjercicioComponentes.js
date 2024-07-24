import React, { useState } from "react";
import PropTypes from "prop-types";

const EjercicioComponentes = ({ year }) => {
  const [yearNow, setYearNow] = useState(year);

  const siguiente = (e) => {
    let operacion = yearNow + 1;
    setYearNow(operacion);
    console.log(yearNow);
  };
  const anterior = (e) => {
    let operacion = yearNow - 1;
    setYearNow(operacion);
    console.log(yearNow);
    };
    
    const cambiarYear = (e) => {
        let dato = parseInt(e.target.value)
        if (Number.isInteger(dato)) {
            setYearNow(dato)
        }else
        setYearNow(yearNow)
    }

  return (
    <div>
      <h2> Ejercicio con eventos y UseState</h2>
      <strong className="label label-green">{yearNow}</strong>

      <p>
        <button onClick={siguiente}>Siguiente</button>
        &nbsp;
        <button onClick={anterior}>Anterior</button>
      </p>

      <p>        
        Cambiar año:&nbsp;
        <input onChange={cambiarYear} type="text" placeholder="Cambia el año" />
      </p>
    </div>
  );
};

EjercicioComponentes.propTypes = {
  year: PropTypes.number.isRequired,
};

export default EjercicioComponentes;
