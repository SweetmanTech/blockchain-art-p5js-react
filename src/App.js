import './App.css';
import Day5 from './sketches/Day5';
import Cat from './sketches/Cat';
import Day7 from './sketches/Day7-OpenSea';
import FourLayers from './sketches/FourLayers';

function App() {
  const project = window.location.pathname;
  return (
    <div className="App">
      <header className="App-header">
        { 
          project.includes("cat") ? 
          <Cat /> :
          project.includes("7") ?
          <Day7 /> :
          project.includes("bankless") ?
          <FourLayers /> :
          <Day5 /> 
        } 
      </header>
    </div>
  );
}

export default App;
