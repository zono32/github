import React from 'react'
import PropTipes from 'prop-types'

const TercerComponente = ({nombre = "Kinso", apellido = "Lafuente", ficha}) => {
  return (
    <div>
          <h2>Comunicación entre componentes</h2>
          <ul>
              <li>{nombre}</li>
              <li>{apellido}</li>
              <li>{ficha.estado}</li>
          </ul>
    </div>
  )
}

TercerComponente.propTipes = {
    nombre: PropTipes.string.isRequired,
    apellido: PropTipes.string,
    ficha: PropTipes.object
}

TercerComponente.defaultProps = {
    nombre: "Juan",
    apellido: "López"
}

export default TercerComponente
