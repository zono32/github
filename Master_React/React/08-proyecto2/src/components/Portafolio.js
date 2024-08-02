import React from "react";

import {Link} from 'react-router-dom';
import ListadoTrabajos from "./ListadoTrabajos";

const Portafolio = () => {
  return (
    <div className="page">
      <h2 className="heading">Portafolio</h2>

      <ListadoTrabajos/>
    </div>
  );
};

export default Portafolio;
