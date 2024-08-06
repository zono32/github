import logo from './logo.svg';
import './App.css';
import EjemploComponente from './components/EjemploComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EjemploComponente />
      </header>
    </div>
  );
}

export default App;
