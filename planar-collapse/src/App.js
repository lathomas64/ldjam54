import logo from './logo.svg';
import './App.css';
import Resource from './components/Resource'

function App() {
  return (
    <div className="App">
        <dialog id="gameOverDialog">
            <p>The world crumbled away... too bad!</p>
            <button onClick={() => window.location.reload()}>Try again</button>
        </dialog>
        <p>Everything is crumbling around us.</p>
        <p>We have time but its space we should be worried about.</p>
        <Resource name="Space" 
            count="1000000000" 
            capacity="1000000000" 
            rate="-1" 
            rateMult="1.01" 
            audio="/ldjam54/assets/crumble.mp3"
            clickText="Try to hold the crumbling world together."/>
        <Resource className="Hidden" name="HiddenResource2" />
    </div>
  );
}

export default App;
