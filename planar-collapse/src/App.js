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
        <dialog id="unlockResearchDialog">
            <p>This isn't going to work forever... We need to research some longer term solutions. </p>
            <button onClick={() => {document.querySelector("#resResearch").classList.remove('Hidden'); document.querySelector("#unlockResearchDialog").close()}}>Unlock Research.</button>
        </dialog>
        <p>Everything is crumbling around us.</p>
        <p>We have time but its space we should be worried about.</p>
        <Resource name="Space" 
            count="510064472" 
            capacity="510064472" 
            rate="-1" 
            rateMult="1.01" 
            audio="/ldjam54/assets/crumble.mp3"
            critical={true}
            clickText="Try to hold the crumbling world together."/>
        <Resource className="Hidden"
            name="Research"
            count="0"
            capacity="100"
            rate="0"
            rateMult="1"
            clickText="Study potential solutions"/>
    </div>
  );
}

export default App;
