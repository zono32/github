import React from 'react'

const SegundoComponente = () => {

//const libros = ["Harry Potter","Juego de Tronos", "Vikingos"];
    const libros = [];
  return (
    <div className='segundo-componente'>
          <h2>Listado de libros</h2>
          {/*Condicional ternario ---- Si se cumple la condición muestra los libros si no, muestra el texto */}
          {libros.length > 0 ?
            (<ul>
                {
                    libros.map((libro, indice )=> {
                        return <li key={indice}>{libro}</li>;
                    })
                }
            </ul>
            )
            :(<p>No hay libros que mostrar</p>)
        }
          
          
    </div>
  )
}

export default SegundoComponente
