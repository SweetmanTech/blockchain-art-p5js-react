import './App.css';
import Day5 from './sketches/Day5';
import Cat from './sketches/Cat';
import Day7 from './sketches/Day7-OpenSea';

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
          <Day5 />   
        } 
      </header>
    </div>
  );
}

export default App;
