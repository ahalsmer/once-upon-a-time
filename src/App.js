import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Once Upon a Time...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-container">
        Once upon a time, there was a princess who dreamed of walking. She was so desparate to achieve this dream that she bargained with a witch to  
      </div>
    </div>
  );
}

export default App;
