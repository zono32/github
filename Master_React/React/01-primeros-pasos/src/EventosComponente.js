import React from "react";

const EventosComponente = () => {
  const hasDadoClick = (e, nombre) => {
    alert(nombre + " Has dado click al boton");
  };

  const hasDadoDobleClick = (e, nombre) => {
    alert(nombre + " Has dado doble click al boton");
  };

  function hasEntrado(e, nombre) {
    console.log(nombre + " has entrado de la caja");
  }

  const hasSalido = (e, nombre) => {
    console.log(nombre + " has Salido de la caja");
  };

  const estasDentro = (e) => {
    console.log("Estas dentro del input mete tu nombre");
  };
  const estasFuera = (e) => {
    console.log("Estas fuera del input");
  };

  return (
    <div>
      <h2> Eventos en React</h2>
      <p>
        {/*Evento click*/}
        <button
          onClick={(e) => {
            hasDadoClick(e, "kinso");
          }}
        >
          Dame click!!
        </button>
      </p>

      <p>
        {/*Evento doble click*/}
        <button
          onDoubleClick={(e) => {
            hasDadoDobleClick(e, "kinso");
          }}
        >
          Dame doble click!!
        </button>
      </p>

      {/*Evento Mouse enter, mouse leave*/}
      <div
        id="caja"
        onMouseEnter={(e) => {
          hasEntrado(e, "Kinso");
        }}
        onMouseLeave={(e) => {
          hasSalido(e, "Kinso");
        }}
      >
        Pasa por encima!!
      </div>

      {/*Evento onfocus, onblur*/}
      <p>
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="Introduce tu nombre..."
        />
      </p>
    </div>
  );
};

export default EventosComponente;
