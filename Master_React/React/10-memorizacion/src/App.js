
//import { Tareas } from './components/Tareas';
import logo from './logo.svg';
import { Gestion } from './components/Gestion';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*Ejercicio con método memo para componentes*/}
        {<Gestion />}
        
        {/*Ejercicio con hook useMemo*/}
        {/*<Tareas />*/}
        
      </header>
    </div>
  );
}

export default App;
