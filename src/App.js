import './App.css';
import Day5 from './sketches/Day5';
import Cat from './sketches/Cat';

function App() {
  const project = window.location.pathname;
  return (
    <div className="App">
      <header className="App-header">
        { 
          project.includes("cat") ? 
          <Cat /> :
          <Day5 />   
        } 
      </header>
    </div>
  );
}

export default App;
