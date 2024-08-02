
import { Gestion } from './components/Gestion';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gestion />
        {/*<Empleados/>*/}
      </header>
    </div>
  );
}

export default App;
