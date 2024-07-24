import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import SegundoComponente from "./SegundoComponente";
import TercerComponente from "./TercerComponente";
import EventosComponente from "./EventosComponente";

function App() {
  const ficha_medica = {
    altura: "175cm",
    grupo: "H+",
    estado: "bueno",
    alergias: "ninguna"
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola muy buenas que tal va todo?</p>
        <div className="componentes">
          {/*Cargar mi primer componente*/}
          <EventosComponente />
          <hr/>
          <TercerComponente
            nombre="Kinso"
            apellido="Lafuente"
            ficha = {ficha_medica}
          />
          <hr/>
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
