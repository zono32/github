import React from "react";
import { Link } from "react-router-dom";
import ListadoTrabajos from "./ListadoTrabajos";

const Inicio = () => {
  return (
    <div className="home">
      <span className="title">
        <h2>
          Hola soy <strong>Joaquín Lafuente</strong> y en la actualidad soy
          estudiante de <strong>Desarrollo de aplicaciones Web</strong> en la
          modalidad dual en el IES de Teis en Vigo.
        </h2>
        <h3>          
          En estos momentos me encuentro realizando las practicas en TECNOLOGIAS
          PLEXUS, S.L. Mi intención al acabar el ciclo es poder ofrecer mis
          servicios como desarrollador web en la parte cliente, para
          programación y desarrollo en todo tipo de proyectos Web.
        </h3>
        <p>
          Te ayudo a crear tu sitio o aplicación web, tener más vivsibilidad y
          relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
        </p>
      </span>
      <section className="last-works">
        <h3 className="heading">Algunos de mis proyectos</h3>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  );
};

export default Inicio;
