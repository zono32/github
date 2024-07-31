import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PanelControl = () => {
  return (
    <div>
          <h2>Panel de control</h2>
          <p>Elige una de las siguientes opciones</p>
          <nav>
              <ul>
                  <li>
                      <NavLink to='/panel/inicio' className={({isActive}) => isActive ? "activado":""} >Inicio</NavLink>
                  </li>
                  <li>
                      <NavLink to='/panel/crear-articulos' className={({isActive}) => isActive ? "activado":""}>Crear Artículos</NavLink>
                  </li>
                  <li>
                      <NavLink to='/panel/gestion-usuarios' className={({isActive}) => isActive ? "activado":""}>Gestión usuarios</NavLink>
                  </li>
                  <li>
                      <NavLink to='/panel/acerca-de' className={({isActive}) => isActive ? "activado":""}>Acerca de</NavLink>
                  </li>
            </ul>
              
      </nav>
      
      <div>
        {/*quiero cargar aqui los componentes}*/}
        <Outlet/>
      </div>
    </div>
  )
}

export default PanelControl
