import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Películas</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Películas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section id="content" className="content">

        {/*Aquí va el listado de películas*/}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      <aside className="lateral">
        <Buscador listadoState={listadoState}
                  setListadoState={setListadoState}/>

        <Crear setListadoState={setListadoState} />
      </aside>

      <footer className="footer">
        &copy; Master en React -{" "}
        <a href="https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/learn/lecture/30517822#overview">
          Master en React
        </a>
      </footer>
    </div>
  );
}

export default App;
