import logo from './logo.svg';
import './App.css';
import FormularioComponents from './components/FormularioComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FormularioComponents/>
       
      </header>
    </div>
  );
}

export default App;
