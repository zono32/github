import React, { useContext } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Inicio from "../components/Inicio";
import { Articulos } from "../components/Articulos";
import Contacto from "../components/Contacto";
import { Acerca } from "../components/Acerca";
import Login from "../components/Login";
import { PruebaContext } from "../components/context/PruebaContex";

export const AppRouter = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <BrowserRouter>
      <header className="header">
        <nav>
          <div className="logo">
            <h3>Aprendiendo react context</h3>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/acerca-de">Acerca de</NavLink>
            </li>

            {usuario.hasOwnProperty('nick') && usuario.nick !== null ? (
              <>
                <li>
                  <NavLink to="/">{usuario.nick}</NavLink>
                </li>
                <li>
                  <a
                    href="./login"
                    onClick={(e) => {
                      e.preventDefault();
                      setUsuario({});
                    }}
                  >
                    Cerrar sesión
                  </a>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Identificate</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h2>Error Esta página no existe</h2>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
