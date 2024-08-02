import React from "react";
import { trabajos } from "./data/trabajos";
import {Link} from 'react-router-dom';

const ListadoTrabajos = ({limite}) => {
  return (
    

      <section className="works">
        {
          trabajos.slice(0,limite).map((trabajo) => {
          return (
            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/" + trabajo.id + ".png"} alt="" />
              </div>
              <span>{trabajo.categorías}</span>
              <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
              </h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          );
        })}
      </section>
    
  );
};

export default ListadoTrabajos;
