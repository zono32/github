import logo from './logo.svg';
import './App.css';
import PruebasComponent from './components/PruebasComponent';
import AjaxComponet from './components/AjaxComponet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <PruebasComponent />
        
        <AjaxComponet/>
      </header>
    </div>
  );
}

export default App;
