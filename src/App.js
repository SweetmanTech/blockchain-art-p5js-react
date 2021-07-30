import './App.css';
import Day5 from './sketches/Day5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Day5 />        
        <p>
          Noisy Day 5
        </p>
        <a
          className="App-link"
          href="https://gateway.pinata.cloud/ipfs/QmabqQ9S3XwubugA4rRq44UrJBL1sWuCXqVfsNiFAUYgs9"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IPFS
        </a>
        <a
          className="App-link"
          href="https://polygonscan.com/tx/0x8b1920d332fdf95edd859b96aa3f25ba4867ae6bebe46ead34e699bddd5842c7"
          target="_blank"
          rel="noopener noreferrer"
        >
          View NFT on PolygonScan
        </a>
      </header>
    </div>
  );
}

export default App;
