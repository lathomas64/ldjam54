import logo from './logo.svg';
import './App.css';
import Resource from './components/Resource'

function App() {
  return (
    <div className="App">
        <Resource name="Space" count="1000000000" capacity="1000000000" rate="-1" rateMult="1.01"/>
        
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
