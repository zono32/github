import { useEffect, useState } from "react";
import "./App.css";
import { PruebaContext } from "./components/context/PruebaContex";
import { AppRouter } from "./routers/AppRouter";


function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    //L primera vez que carga el componente
    let usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuarioLocal)
  }, []);

  useEffect(() => {
    //Cada vez que actualice el estado usuario se guarda en el localstorage
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  
    /*
    const curso = {
    id: 1,
    titulo: "Master en React",
    contenido: "Muchas horas de contenido"
    }
    */
  

  return (
    <div className="App">
      <PruebaContext.Provider
        value={{
          usuario: usuario,
          setUsuario: setUsuario,
        }}
      >
        <AppRouter />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
